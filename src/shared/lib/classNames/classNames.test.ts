import { classNames } from "@/shared/lib";

describe("classNames", () => {
	test("with only one argument", () => {
		expect(classNames("someClass")).toBe("someClass");
	});
	test("with a few string arguments", () => {
		const args = "someClass someClass1 someClass2";
		expect(classNames(args)).toBe(args);
	});
	test("with a argument as object", () => {
		const expected = "someClass someClass1";
		expect(classNames("someClass", { someClass1: true, someClass2: false })).toBe(expected);
	});
	test("with an undefined argument", () => {
		const expected = "someClass someClass1";
		expect(classNames("someClass", undefined, { someClass1: true, someClass2: false })).toBe(expected);
	});
});
