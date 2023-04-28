import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/shared/lib/tests";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
	test("test render", () => {
		renderWithProviders(<Sidebar />);
		expect(screen.getByTestId("sidebar-test")).toBeInTheDocument();
	});

	test("test toggle", () => {
		renderWithProviders(<Sidebar />);
		const toggleButton = screen.getByTestId("sidebar-toggle-test");
		expect(screen.getByTestId("sidebar-toggle-test")).toBeInTheDocument();
		fireEvent.click(toggleButton);
		expect(screen.getByTestId("sidebar-test")).toHaveClass("collapsed");
	});
});
