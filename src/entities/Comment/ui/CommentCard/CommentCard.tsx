import { memo } from "react";
import { classNames, ToggleFeaturesWrapper } from "@/shared/lib";
import { AppLink, AppLinkDeprecated, Avatar, AvatarDeprecated, Text, TextDeprecated } from "@/shared/ui";
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
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<li data-testid="CommentCard" className={classNames(cls.commentCardRedesigned, className)}>
					<AppLink to={getRoute.profile(user.id)} className={cls.header}>
						<Avatar className={cls.avatar} src={user.avatar} size={30} alt={user.username} />
						<Text text={user.username} bold />
					</AppLink>
					<Text text={comment.text} className={cls.textRedesigned} />
				</li>
			}
			off={
				<li data-testid="CommentCard" className={classNames(cls.commentCard, className)}>
					<div className={cls.header}>
						<AvatarDeprecated
							className={cls.avatar}
							src={user.avatar}
							size={30}
							alt={user.username}
						/>
						<AppLinkDeprecated to={getRoute.profile(user.id)}>
							<TextDeprecated text={user.username} />
						</AppLinkDeprecated>
					</div>
					<TextDeprecated text={comment.text} />
				</li>
			}
		/>
	);
});
