import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "@/shared/ui";

describe("Button", () => {
	test("render test", () => {
		render(<Button>TEST</Button>);
		expect(screen.getByTestId("button-test")).toBeInTheDocument();
	});

	test("render with CLEAR theme", () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByTestId("button-test")).toHaveClass("clear");
	});
});
