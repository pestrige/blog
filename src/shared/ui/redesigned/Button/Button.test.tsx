import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
	test("render test", () => {
		render(<Button>TEST</Button>);
		expect(screen.getByTestId("button-test")).toBeInTheDocument();
	});

	test("render with CLEAR theme", () => {
		render(<Button variant="clear">TEST</Button>);
		expect(screen.getByTestId("button-test")).toHaveClass("clear");
	});
});
