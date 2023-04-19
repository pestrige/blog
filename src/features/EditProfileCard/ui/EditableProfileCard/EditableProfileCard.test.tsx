import { screen } from "@testing-library/react";
import { renderWithProviders, RenderWithProvidersProps } from "shared/lib/tests";
import { ProfileCardType } from "entities/ProfileCard";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Api } from "shared/api";
import userEvent from "@testing-library/user-event";
import { profileReducer } from "../../model";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: ProfileCardType = {
	id: "1",
	first: "admin",
	lastname: "adminLastname",
	age: 18,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin123",
};

const options: RenderWithProvidersProps = {
	initialState: {
		profile: { readonly: true, data: profile, form: profile, validateErrors: {} },
		user: { authData: { id: "1" } },
	},
	asyncReducers: { profile: profileReducer },
};

describe("EditableProfileCard", () => {
	beforeEach(() => {
		renderWithProviders(<EditableProfileCard id="1" />, options);
	});

	test("should render profile form", async () => {
		expect(screen.getByTestId("ProfileCard.Form")).toBeInTheDocument();
	});

	test("should toggle to edit mode", async () => {
		await userEvent.click(screen.getByTestId("ProfileCard.EditBtn"));
		expect(screen.getByTestId("ProfileCard.SaveBtn")).toBeInTheDocument();
		expect(screen.getByTestId("ProfileCard.CancelBtn")).toBeInTheDocument();
	});

	test("should cancel edit mode and restore inputs values", async () => {
		await userEvent.click(screen.getByTestId("ProfileCard.EditBtn"));

		await userEvent.clear(screen.getByTestId("ProfileCard.Input.first"));
		await userEvent.clear(screen.getByTestId("ProfileCard.Input.lastname"));

		await userEvent.type(screen.getByTestId("ProfileCard.Input.first"), "user123");
		await userEvent.type(screen.getByTestId("ProfileCard.Input.lastname"), "user456");
		expect(screen.getByTestId("ProfileCard.Input.first")).toHaveValue("user123");
		expect(screen.getByTestId("ProfileCard.Input.lastname")).toHaveValue("user456");

		await userEvent.click(screen.getByTestId("ProfileCard.CancelBtn"));
		expect(screen.getByTestId("ProfileCard.Input.first")).toHaveValue("admin");
		expect(screen.getByTestId("ProfileCard.Input.lastname")).toHaveValue("adminLastname");
	});

	test("should render validation errors", async () => {
		await userEvent.click(screen.getByTestId("ProfileCard.EditBtn"));

		await userEvent.clear(screen.getByTestId("ProfileCard.Input.first"));
		await userEvent.clear(screen.getByTestId("ProfileCard.Input.lastname"));
		await userEvent.clear(screen.getByTestId("ProfileCard.Input.age"));

		await userEvent.click(screen.getByTestId("ProfileCard.SaveBtn"));
		expect(screen.getByTestId("ProfileCard.Error.first")).toBeInTheDocument();
		expect(screen.getByTestId("ProfileCard.Error.lastname")).toBeInTheDocument();
		expect(screen.getByTestId("ProfileCard.Error.age")).toBeInTheDocument();
	});

	test("should send request", async () => {
		const mockRequest = jest.spyOn(Api, "put");
		await userEvent.click(screen.getByTestId("ProfileCard.EditBtn"));
		await userEvent.click(screen.getByTestId("ProfileCard.SaveBtn"));

		expect(mockRequest).toBeCalledTimes(1);
	});
});
