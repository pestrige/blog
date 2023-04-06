import { classNames } from "shared/lib";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { SortOrder } from "shared/types";
import { ArticleSort } from "../../model/types/article";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSort;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSort) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { className, onChangeOrder, onChangeSort, order, sort } = props;
	const { t } = useTranslation("articles");

	const orderOptions = useMemo<SelectOption[]>(
		() => [
			{
				value: "asc",
				content: t("возрастанию"),
			},
			{
				value: "desc",
				content: t("убыванию"),
			},
		],
		[t]
	);

	const sortFieldOptions = useMemo<SelectOption[]>(
		() => [
			{
				value: ArticleSort.CREATED,
				content: t("дате создания"),
			},
			{
				value: ArticleSort.TITLE,
				content: t("названию"),
			},
			{
				value: ArticleSort.VIEWS,
				content: t("просмотрам"),
			},
		],
		[t]
	);

	const changeSortHandler = useCallback(
		(newSort: string) => {
			onChangeSort(newSort as ArticleSort);
		},
		[onChangeSort]
	);

	const changeOrderHandler = useCallback(
		(newOrder: string) => {
			onChangeOrder(newOrder as SortOrder);
		},
		[onChangeOrder]
	);

	return (
		<div className={classNames(cls.wrapper, className)}>
			<Select
				name="articlesSort"
				options={sortFieldOptions}
				label={t("Сортировать по")}
				value={sort}
				onChange={changeSortHandler}
			/>
			<Select
				name="articlesOrder"
				options={orderOptions}
				label={t("по")}
				value={order}
				onChange={changeOrderHandler}
				className={cls.order}
			/>
		</div>
	);
});
