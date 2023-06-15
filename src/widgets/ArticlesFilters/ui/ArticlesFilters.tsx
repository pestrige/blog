import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleSort, ArticleType } from "@/entities/Article";
import { classNames } from "@/shared/lib";
import { Card, Input } from "@/shared/ui";
import { SearchIcon } from "@/shared/assets";
import { SortOrder } from "@/shared/types";
import cls from "./ArticlesFilters.module.scss";

interface Props {
	className?: string;
	sort: ArticleSort;
	order: SortOrder;
	type: ArticleType;
	search: string;
	onChangeSearch: (value: string) => void;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSort) => void;
	onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: Props) => {
	const {
		className,
		search,
		sort,
		order,
		type,
		onChangeType,
		onChangeSearch,
		onChangeSort,
		onChangeOrder,
	} = props;
	const { t } = useTranslation("articles");

	return (
		<Card className={classNames(cls.root, className)} paddings="md">
			<Input
				onChange={onChangeSearch}
				value={search}
				placeholder={t("Найти")}
				name="articlesSearch"
				Icon={SearchIcon}
			/>
			<ArticleTypeTabs type={type} onTabClick={onChangeType} />
			<ArticleSortSelector
				order={order}
				sort={sort}
				onChangeOrder={onChangeOrder}
				onChangeSort={onChangeSort}
			/>
		</Card>
	);
});
