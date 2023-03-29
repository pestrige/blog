import { memo } from "react";
import { EditableProfileCard } from "features/EditProfileCard";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const ProfilePage = memo((): JSX.Element => {
	return (
		<main className="page">
			<ProfilePageHeader />
			<EditableProfileCard />
		</main>
	);
});

export default ProfilePage;
