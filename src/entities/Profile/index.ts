export { Profile, ProfileSchema } from "./model/types/profile";
export { profileActions, profileReducer } from "./model/slice/profileSlice";
export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
export {
	useProfileSelector,
	useProfileErrorSelector,
	useProfileLoadingSelector,
} from "./model/selectors";

export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
