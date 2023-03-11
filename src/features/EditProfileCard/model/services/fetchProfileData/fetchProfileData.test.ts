import { TestAsyncThunk } from "shared/lib/tests";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfileCardType } from "entities/ProfileCard";
import { fetchProfileData } from "./fetchProfileData";

const profile: ProfileCardType = {
	first: "Ivan",
	lastname: "Ivanov",
	age: 36,
	currency: Currency.RUB,
	country: Country.Russia,
	city: "Moscow",
	username: "admin",
	avatar: "avatar-url.webp",
};

describe("fetchProfileData", () => {
	test("should successfully fetch data", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(profile);
	});

	test("should return fetch error", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe("rejected");
	});
});
