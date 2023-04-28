import { memo } from "react";
import { classNames } from "@/shared/lib";
import { AppLink, Avatar, Text } from "@/shared/ui";
import { RoutePaths } from "@/shared/config";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface Props {
	comment: Comment;
	className?: string;
}

export const CommentCard = memo(({ comment, className = "" }: Props): JSX.Element => {
	const { user } = comment;

	return (
		<li className={classNames(cls.commentCard, className)}>
			<div className={cls.header}>
				<Avatar className={cls.avatar} src={user.avatar} size={30} alt={user.username} />
				<AppLink to={`${RoutePaths.profile}/${user.id}`}>
					<Text text={user.username} />
				</AppLink>
			</div>
			<Text text={comment.text} />
		</li>
	);
});
