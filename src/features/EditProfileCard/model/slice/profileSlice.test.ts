import { ProfileSchema, updateProfileData } from "features/EditProfileCard";
import { ProfileCardType, ValidateErrorsEnum } from "entities/ProfileCard";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducer, profileActions, UpdateProfilePayload } from "./profileSlice";

describe("profileSlice", () => {
	test("should set toggle readonly flag", () => {
		const state: DeepPartial<ProfileSchema> = { readonly: true };

		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
			readonly: false,
		});
	});

	test("should cancel edit state", () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			error: ValidateErrorsEnum.SERVER_ERROR,
			validateErrors: { lastname: ValidateErrorsEnum.REQUIRED_FIELD },
			data: { lastname: "Ivanov" },
			form: { lastname: "" },
		};

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			readonly: true,
			error: undefined,
			validateErrors: {},
			data: { lastname: "Ivanov" },
			form: { lastname: "Ivanov" },
		});
	});

	test("should update firstname", () => {
		const state: DeepPartial<ProfileSchema> = {
			validateErrors: { first: ValidateErrorsEnum.REQUIRED_FIELD },
			form: { first: "" },
		};
		const payload: UpdateProfilePayload = {
			form: { first: "Ivan" },
			field: "first",
		};

		expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(payload))).toEqual({
			validateErrors: {},
			form: { first: "Ivan" },
		});
	});

	test("should update lastname", () => {
		const state: DeepPartial<ProfileSchema> = {
			validateErrors: { lastname: ValidateErrorsEnum.REQUIRED_FIELD },
			form: { lastname: "" },
		};
		const payload: UpdateProfilePayload = {
			form: { lastname: "Ivanov" },
			field: "lastname",
		};

		expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(payload))).toEqual({
			validateErrors: {},
			form: { lastname: "Ivanov" },
		});
	});

	test("should toggle loading status and reset errors", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: { first: ValidateErrorsEnum.REQUIRED_FIELD },
		};

		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			validateErrors: {},
			isLoading: true,
			error: undefined,
		});
	});

	test("should return fulfilled status and data", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};
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

		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profile, ""))).toEqual({
			readonly: true,
			isLoading: false,
			form: profile,
			data: profile,
		});
	});
});
