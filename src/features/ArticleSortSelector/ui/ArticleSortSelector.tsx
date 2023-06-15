import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { classNames, ToggleFeaturesWrapper } from "@/shared/lib";
import { Select, SelectDeprecated, SelectOption, VStack } from "@/shared/ui";
import { SortOrder } from "@/shared/types";
import { ArticleSort } from "@/entities/Article";
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

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
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
		[t],
	);

	const sortFieldOptions = useMemo<SelectOption<ArticleSort>[]>(
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
		[t],
	);

	const changeSortHandler = useCallback(
		(newSort: ArticleSort) => {
			onChangeSort(newSort);
		},
		[onChangeSort],
	);

	const changeOrderHandler = useCallback(
		(newOrder: SortOrder) => {
			onChangeOrder(newOrder);
		},
		[onChangeOrder],
	);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<VStack className={className} gap={8}>
					<Select<ArticleSort>
						name="articlesSort"
						options={sortFieldOptions}
						label={t("Сортировать по")}
						isLabelInRow
						value={sort}
						onChange={changeSortHandler}
					/>
					<Select<SortOrder>
						name="articlesOrder"
						options={orderOptions}
						value={order}
						onChange={changeOrderHandler}
					/>
				</VStack>
			}
			off={
				<div className={classNames(cls.wrapper, className)}>
					<SelectDeprecated<ArticleSort>
						name="articlesSort"
						options={sortFieldOptions}
						label={t("Сортировать по")}
						value={sort}
						onChange={changeSortHandler}
					/>
					<SelectDeprecated<SortOrder>
						name="articlesOrder"
						options={orderOptions}
						label={t("по")}
						value={order}
						onChange={changeOrderHandler}
						className={cls.order}
					/>
				</div>
			}
		/>
	);
});
