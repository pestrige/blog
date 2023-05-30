import { Node, Project, SyntaxKind } from "ts-morph";

/**
 * Удаление кода, спрятанного за фича флагом,
 * в вызове нужно передать аргументы с названием фичи и ее состоянием (on/off)
 */

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
		if (child.isKind(SyntaxKind.Identifier) && child.getText() === "toggleFeatures") {
			isToggleFeature = true;
		}
	});

	return isToggleFeature;
};

sourceFiles.forEach((sourceFile) => {
	sourceFile.forEachDescendant((node) => {
		/**
		 * Ищем все ноды типа CallExpression с именем toggleFeatures
		 */
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
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
		}
	});
});

project.saveSync();
