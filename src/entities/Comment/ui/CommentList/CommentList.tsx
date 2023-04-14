import { memo } from "react";
import { t } from "i18next";
import { Text } from "shared/ui";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentCardSkeleton } from "../CommentCard/CommentCardSkeleton";
import { Comment } from "../../model/types/comment";
import cls from "./CommentList.module.scss";

interface Props {
	comments?: Comment[];
	title?: string;
	isLoading?: boolean;
	error?: string;
	className?: string;
}

export const CommentList = memo(
	({ comments = [], title, isLoading, error, className = "" }: Props): JSX.Element => {
		const isComments = comments?.length > 0 && !isLoading;
		const isEmptyComments = !comments?.length && !isLoading;

		return (
			<div>
				{!!title && <Text className={cls.title} title={title} />}

				<ul className={className}>
					{isLoading && <CommentCardSkeleton />}

					{isComments &&
						comments?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}

					{isEmptyComments && <Text text={t("Комментарии не найдены")} />}

					{!isLoading && !!error && (
						<li>
							<Text variant="error" text={error} />
						</li>
					)}
				</ul>
			</div>
		);
	}
);
