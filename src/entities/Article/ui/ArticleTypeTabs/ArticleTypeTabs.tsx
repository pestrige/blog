import { memo, useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui";
import { useTranslation } from "react-i18next";
import { ArticleType } from "../../model/types/article";

interface Props {
	className?: string;
	type: ArticleType;
	onTabClick: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className = "", type, onTabClick }: Props): JSX.Element => {
	const { t } = useTranslation("articles");

	const tabs: TabItem[] = useMemo(
		() => [
			{ value: ArticleType.ALL, content: t("Все") },
			{ value: ArticleType.IT, content: t("IT") },
			{ value: ArticleType.SCIENCE, content: t("Наука") },
			{ value: ArticleType.ECONOMICS, content: t("Экономика") },
		],
		[t]
	);

	const handleChangeType = useCallback(
		(type: string) => {
			onTabClick(type as ArticleType);
		},
		[onTabClick]
	);

	return (
		<div className={className}>
			<Tabs tabs={tabs} value={type} onTabClick={handleChangeType} />
		</div>
	);
});
