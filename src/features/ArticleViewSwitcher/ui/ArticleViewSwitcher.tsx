import React, { memo, MouseEvent, useCallback } from "react";
import { ButtonDeprecated, ButtonIcon, ButtonTheme, Card, HStack } from "@/shared/ui";
import { ViewGridIcon, ViewListIcon, ViewGridIconDeprecated, ViewListIconDeprecated } from "@/shared/assets";
import { classNames, toggleFeatures, ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleView } from "@/entities/Article";
import cls from "./ArticleViewSwitcher.module.scss";

const viewTypes = [
	{
		id: 1,
		view: ArticleView.GRID,
		Icon: toggleFeatures({
			name: "isAppRedesigned",
			on: () => ViewGridIcon,
			off: () => ViewGridIconDeprecated,
		}),
	},
	{
		id: 2,
		view: ArticleView.LIST,
		Icon: toggleFeatures({
			name: "isAppRedesigned",
			on: () => ViewListIcon,
			off: () => ViewListIconDeprecated,
		}),
	},
];

interface Props {
	activeView: ArticleView;
	onViewSwitch: (view: ArticleView) => void;
}

export const ArticleViewSwitcher = memo(({ activeView, onViewSwitch }: Props): JSX.Element => {
	const handleButtonClick = useCallback(
		({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
			const currentView = currentTarget.name as ArticleView;
			onViewSwitch(currentView);
		},
		[onViewSwitch],
	);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={
				<Card paddings="sm" as="ul" className={cls.list}>
					{viewTypes.map(({ id, view, Icon }) => (
						<li key={id} className={cls.listItem}>
							<ButtonIcon
								Svg={Icon}
								onClick={handleButtonClick}
								name={view}
								className={view !== activeView ? cls.nonActive : ""}
							/>
						</li>
					))}
				</Card>
			}
			off={
				<HStack as="ul">
					{viewTypes.map(({ id, view, Icon }) => (
						<li key={id}>
							<ButtonDeprecated
								name={view}
								onClick={handleButtonClick}
								theme={ButtonTheme.CLEAR}
							>
								<Icon
									className={classNames(cls.icon, { [cls.active]: view === activeView })}
								/>
							</ButtonDeprecated>
						</li>
					))}
				</HStack>
			}
		/>
	);
});
