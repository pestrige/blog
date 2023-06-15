import React, { memo } from "react";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { ArticleViewSwitcher } from "@/features/ArticleViewSwitcher";
import { ArticlesPageGreeting } from "@/features/ArticlesPageGreeting";
import { StickyContentLayout } from "@/shared/layouts";
import { ArticleInfinityList } from "../ArticlesInfinityList/ArticleInfinityList";
import { useArticleFilters } from "../../hooks/useArticleFilters";

export const ArticlesPageRedesigned = memo(function ArticlesPageRedesigned(): JSX.Element {
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
			<StickyContentLayout
				left={<ArticleViewSwitcher activeView={view} onViewSwitch={onChangeView} />}
				content={<ArticleInfinityList />}
				right={
					<ArticlesFilters
						sort={sort}
						order={order}
						search={search}
						type={type}
						onChangeSort={onChangeSort}
						onChangeOrder={onChangeOrder}
						onChangeSearch={onChangeSearch}
						onChangeType={onChangeType}
					/>
				}
			/>
			<ArticlesPageGreeting />
		</>
	);
});
