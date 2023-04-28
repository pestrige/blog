import { memo } from "react";
import { useParams } from "react-router-dom";
import { EditableProfileCard } from "@/features/EditProfileCard";

const ProfilePage = memo((): JSX.Element => {
	const { id } = useParams<{ id: string }>();
	return (
		<main className="page">
			<EditableProfileCard id={id} />
		</main>
	);
});

export default ProfilePage;
