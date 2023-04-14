import React, { memo, MouseEvent, useCallback } from "react";
import { Button, ButtonTheme, HStack } from "shared/ui";
import { ViewGridIcon, ViewListIcon } from "shared/assets";
import { classNames } from "shared/lib";
import { ArticleView } from "../../model/types/article";
import cls from "./ArticleViewSwitcher.module.scss";

const viewTypes = [
	{ id: 1, view: ArticleView.GRID, Icon: ViewGridIcon },
	{ id: 2, view: ArticleView.LIST, Icon: ViewListIcon },
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
		[onViewSwitch]
	);

	return (
		<HStack as="ul">
			{viewTypes.map(({ id, view, Icon }) => (
				<li key={id}>
					<Button name={view} onClick={handleButtonClick} theme={ButtonTheme.CLEAR}>
						<Icon className={classNames(cls.icon, { [cls.active]: view === activeView })} />
					</Button>
				</li>
			))}
		</HStack>
	);
});
