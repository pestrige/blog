import { UserSchema } from "entities/User";
import { LoginSchema } from "features";

export interface StoreSchema {
	user: UserSchema;
	login: LoginSchema;
}
