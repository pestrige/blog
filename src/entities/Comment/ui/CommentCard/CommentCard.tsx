import { memo } from "react";
import { classNames } from "@/shared/lib";
import { AppLinkDeprecated, AvatarDeprecated, TextDeprecated } from "@/shared/ui";
import { getRoute } from "@/shared/constants";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface Props {
	comment: Comment;
	className?: string;
}

export const CommentCard = memo(({ comment, className = "" }: Props): JSX.Element => {
	const { user } = comment;

	return (
		<li data-testid="CommentCard" className={classNames(cls.commentCard, className)}>
			<div className={cls.header}>
				<AvatarDeprecated className={cls.avatar} src={user.avatar} size={30} alt={user.username} />
				<AppLinkDeprecated to={getRoute.article(user.id)}>
					<TextDeprecated text={user.username} />
				</AppLinkDeprecated>
			</div>
			<TextDeprecated text={comment.text} />
		</li>
	);
});
