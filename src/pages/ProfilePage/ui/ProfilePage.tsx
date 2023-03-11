import { memo } from "react";
import { EditableProfileCard } from "features/EditProfileCard";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const ProfilePage = memo((): JSX.Element => {
	return (
		<div className="page">
			<ProfilePageHeader />
			<EditableProfileCard />
		</div>
	);
});

export default ProfilePage;
