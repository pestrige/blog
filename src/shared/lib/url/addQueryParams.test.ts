import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
	test("should return query params", () => {
		const params = {
			foo: "bar",
			baz: "qux",
		};
		const result = getQueryParams(params);

		expect(result).toBe("?foo=bar&baz=qux");
	});

	test("should return empty string if no params", () => {
		const params = {};
		const result = getQueryParams(params);

		expect(result).toBe("");
	});

	test("should return query params if some params are empty", () => {
		const params = {
			foo: "bar",
			baz: undefined,
		};
		const result = getQueryParams(params);

		expect(result).toBe("?foo=bar");
	});
});
