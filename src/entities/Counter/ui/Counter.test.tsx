import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "shared/lib/tests";
import { Counter } from "./Counter";

describe("Counter", () => {
	beforeEach(() => {
		renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } });
	});

	test("should render counter value", () => {
		expect(screen.getByTestId("counter-value-test")).toHaveTextContent("10");
	});

	test("should render incremented counter value", () => {
		userEvent.click(screen.getByTestId("increment-btn-test"));
		expect(screen.getByTestId("counter-value-test")).toHaveTextContent("11");
	});

	test("should render decremented counter value", () => {
		userEvent.click(screen.getByTestId("decrement-btn-test"));
		expect(screen.getByTestId("counter-value-test")).toHaveTextContent("9");
	});
});
