import { TestAsyncThunk } from "@/shared/lib/tests";
import { ProfileCardType, ValidateErrorsEnum } from "@/entities/ProfileCard";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { updateProfileData } from "./updateProfileData";

const form: ProfileCardType = {
	id: "1",
	first: "Ivan",
	lastname: "Ivanov",
	age: 36,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin",
	avatar: "avatar-url.webp",
};

describe("updateProfileData", () => {
	test("should successfully update profile", async () => {
		const thunk = new TestAsyncThunk(updateProfileData, { profile: { form } });
		thunk.api.put.mockReturnValue(Promise.resolve({ data: form }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(form);
	});

	test("should return server error", async () => {
		const thunk = new TestAsyncThunk(updateProfileData, { profile: { form } });
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toEqual({ error: ValidateErrorsEnum.SERVER_ERROR });
	});
});
