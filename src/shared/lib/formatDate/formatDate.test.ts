import { formatDateToISO } from "./formatDate";

describe("formatDateToISO", () => {
	test("should return ISO date", () => {
		expect(formatDateToISO("20.12.2023")).toBe("2023-12-20");
	});

	test("should format short ISO date", () => {
		expect(formatDateToISO("2023-12-20")).toBe("2023-12-20");
	});

	test("should format full ISO date", () => {
		expect(formatDateToISO("2023-11-18T14:54:39.929")).toBe("2023-11-18");
	});
});
