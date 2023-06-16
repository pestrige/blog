import { memo } from "react";
import { useParams } from "react-router-dom";
import { EditableProfileCard } from "@/features/EditProfileCard";
import { usePageClassName } from "@/shared/hooks";

const ProfilePage = memo((): JSX.Element => {
	const { id } = useParams<{ id: string }>();
	const pageClassName = usePageClassName({ isSmall: true });

	return (
		<main className={pageClassName} data-testid="ProfilePage">
			<EditableProfileCard id={id} />
		</main>
	);
});

export default ProfilePage;
