import { JsxAttribute, Node, Project, SyntaxKind } from "ts-morph";

/**
 * Удаление кода, спрятанного за фича флагом,
 * в вызове нужно передать аргументы с названием фичи и ее состоянием (on/off)
 */

const toggleFunctionName = "toggleFeatures";
const toggleComponentName = "ToggleFeaturesWrapper";

const removedFeatureName = process.argv[2]; // e.g. "isArticleEnabled"
const featureState = process.argv[3]; // e.g. "on" or "off"

if (!removedFeatureName) {
	throw new Error("You should specify feature name");
}

if (!featureState || (featureState !== "on" && featureState !== "off")) {
	throw new Error("You should specify feature state (on/off)");
}

const project = new Project();
const sourceFiles = project.addSourceFilesAtPaths("src/**/*.{ts,tsx}");

const isToggleFunction = (node: Node) => {
	let isToggleFeature = false;
	node.forEachChild((child) => {
		if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
			isToggleFeature = true;
		}
	});

	return isToggleFeature;
};

const isToggleComponent = (node: Node) => {
	const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

	return identifier?.getText() === toggleComponentName;
};

const getReplacementComponentName = (jsxAttribute?: JsxAttribute) => {
	const value = jsxAttribute
		?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
		?.getExpression()
		?.getText();
	if (value?.startsWith("(")) {
		return value.slice(1, -1);
	}

	return value;
};

const removeToggleFunction = (node: Node) => {
	const optionsObject = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

	if (!optionsObject) {
		return;
	}

	/**
	 * Получаем имя фичи и функции on/off
	 */
	const featureNameProperty = optionsObject.getProperty("name");
	const onFunctionProperty = optionsObject.getProperty("on");
	const offFunctionProperty = optionsObject.getProperty("off");

	const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
	const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
	const featureName = featureNameProperty
		?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
		?.getText()
		.slice(1, -1);

	if (featureName !== removedFeatureName) {
		return;
	}

	/**
	 * В зависимости от состояния фичи
	 * заменяем ноду на тело функции on или off
	 */

	if (featureState === "on") {
		node.replaceWithText(onFunction?.getBody().getText() ?? "");
	}

	if (featureState === "off") {
		node.replaceWithText(offFunction?.getBody().getText() ?? "");
	}
};

const getAttributeNodeByName = (JsxAttributes: JsxAttribute[], name: string) => {
	return JsxAttributes.find((attribute) => attribute.getName() === name);
};

const removeToggleComponent = (node: Node) => {
	const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

	const onAttribute = getAttributeNodeByName(attributes, "on");
	const offAttribute = getAttributeNodeByName(attributes, "off");
	const featureNameAttribute = getAttributeNodeByName(attributes, "featureName");
	const featureName = featureNameAttribute
		?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
		?.getText()
		?.slice(1, -1);

	if (featureName !== removedFeatureName) {
		return;
	}

	const onComponent = getReplacementComponentName(onAttribute);
	const offComponent = getReplacementComponentName(offAttribute);

	if (featureState === "on" && onComponent) {
		node.replaceWithText(onComponent);
	}

	if (featureState === "off" && offComponent) {
		const replacementValue = offComponent === "null" ? "" : offComponent;
		node.replaceWithText(replacementValue);
	}
};

sourceFiles.forEach((sourceFile) => {
	sourceFile.forEachDescendant((node) => {
		/**
		 * Ищем все ноды типа CallExpression с именем toggleFeatures
		 * и заменяем ноду на тело функции on/off
		 */
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			removeToggleFunction(node);
		}

		/**
		 * Ищем все ноды типа JsxClosingElement с именем ToggleFeaturesWrapper
		 * и заменяем ноду на компонент переданный в on/off пропсы
		 */
		if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
			removeToggleComponent(node);
		}
	});
});

project.saveSync();
