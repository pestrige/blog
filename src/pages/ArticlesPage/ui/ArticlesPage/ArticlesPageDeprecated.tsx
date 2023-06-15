import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticlesPageGreeting } from "@/features/ArticlesPageGreeting";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleViewSwitcher } from "@/features/ArticleViewSwitcher";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { CardDeprecated, HStack, InputDeprecated } from "@/shared/ui";
import { ArticleInfinityList } from "../ArticlesInfinityList/ArticleInfinityList";
import { useArticleFilters } from "../../hooks/useArticleFilters";

export const ArticlesPageDeprecated = memo(function ArticlesPageDeprecated(): JSX.Element {
	const { t } = useTranslation("articles");
	const {
		sort,
		order,
		view,
		search,
		type,
		onChangeSort,
		onChangeOrder,
		onChangeView,
		onChangeSearch,
		onChangeType,
	} = useArticleFilters();

	return (
		<>
			<div className="big-margin">
				<HStack gap={16} justify="between" className="block-margin">
					<ArticleSortSelector
						sort={sort}
						order={order}
						onChangeSort={onChangeSort}
						onChangeOrder={onChangeOrder}
					/>
					<ArticleViewSwitcher activeView={view} onViewSwitch={onChangeView} />
				</HStack>

				<CardDeprecated className="block-margin">
					<InputDeprecated
						name="articlesSearch"
						placeholder={t("Поиск")}
						value={search}
						onChange={onChangeSearch}
					/>
				</CardDeprecated>

				<ArticleTypeTabs type={type} onTabClick={onChangeType} />
			</div>
			<ArticleInfinityList />
			<ArticlesPageGreeting />
		</>
	);
});
