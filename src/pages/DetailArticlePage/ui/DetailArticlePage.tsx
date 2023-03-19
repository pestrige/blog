import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";
import { Text } from "shared/ui";
import { CommentList } from "entities/Comment";
import { ReducersList, useAppDispatch, useDynamicReducerLoader, useInitialEffect } from "shared/hooks";
import { articleDetailsCommentsSliceReducer } from "../model/slice/articleDetailsCommentsSlice";
import {
	useArticleCommentsError,
	useArticleCommentsSelector,
	useIsArticleCommentsLoading,
} from "../model/selectors/selectors";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";

const reducers: ReducersList = { articleDetailsComments: articleDetailsCommentsSliceReducer };

const DetailArticlePage = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useArticleCommentsSelector();
	const isCommentsLoading = useIsArticleCommentsLoading();
	const error = useArticleCommentsError();

	useDynamicReducerLoader(reducers);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	if (!id) {
		return (
			<div className="page">
				<Text title={t("Статья не найдена")} />
			</div>
		);
	}

	return (
		<div className="page">
			<ArticleDetails id={id ?? "1"} />
			<CommentList
				error={error}
				isLoading={isCommentsLoading}
				title={t("Комментарии")}
				comments={comments}
			/>
		</div>
	);
});

export default DetailArticlePage;
