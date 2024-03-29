import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs, TabsDeprecated } from "@/shared/ui";
import { ArticleType } from "@/entities/Article";
import { ToggleFeaturesWrapper } from "@/shared/lib";

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
		[t],
	);

	const handleChangeType = useCallback(
		(type: string) => {
			onTabClick(type as ArticleType);
		},
		[onTabClick],
	);

	return (
		<div className={className}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<Tabs tabs={tabs} value={type} onTabClick={handleChangeType} />}
				off={<TabsDeprecated tabs={tabs} value={type} onTabClick={handleChangeType} />}
			/>
		</div>
	);
});
