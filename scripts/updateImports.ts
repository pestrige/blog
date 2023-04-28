import { Project } from "ts-morph";

const projectPathsRegex = /^(app\/|widgets|entities\/|features\/|pages|shared\/)/;
const project = new Project();
const sourceFiles = project.addSourceFilesAtPaths("src/**/*.{ts,tsx}");

sourceFiles.forEach((sourceFile) => {
	const imports = sourceFile.getImportDeclarations();

	imports.forEach((importDeclaration) => {
		const path = importDeclaration.getModuleSpecifierValue();

		if (path.match(projectPathsRegex)) {
			importDeclaration.setModuleSpecifier(`@/${path}`);
		}
	});
});

project.saveSync();
