import { UserRole } from "../constants/user";
import { FeatureFlags } from "@/shared/types";

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRole[];
	features?: FeatureFlags;
}

export interface UserSchema {
	authData?: User;

	_mounted?: boolean;
}
