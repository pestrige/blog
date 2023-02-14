import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets";
import { renderWithTranslation } from "shared/lib";

describe("Sidebar", () => {
	test("test render", () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar-test")).toBeInTheDocument();
	});

	test("test toggle", () => {
		renderWithTranslation(<Sidebar />);
		const toggleButton = screen.getByTestId("sidebar-toggle-test");
		expect(screen.getByTestId("sidebar-toggle-test")).toBeInTheDocument();
		fireEvent.click(toggleButton);
		expect(screen.getByTestId("sidebar-test")).toHaveClass("collapsed");
	});
});
