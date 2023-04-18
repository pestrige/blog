import { memo } from "react";
import { EditableProfileCard } from "features/EditProfileCard";

const ProfilePage = memo((): JSX.Element => {
	return (
		<main className="page">
			<EditableProfileCard />
		</main>
	);
});

export default ProfilePage;
