import { ProfileCardType } from "entities/ProfileCard";

export interface ProfileSchema {
	data?: ProfileCardType;
	form?: ProfileCardType;
	isLoading: boolean;
	error: string;
	readonly: boolean;
}
