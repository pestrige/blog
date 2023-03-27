import React, { memo, MouseEvent, useCallback } from "react";
import { ArticleView } from "entities/Article";
import { Button, ButtonTheme } from "shared/ui";
import { ViewGridIcon, ViewListIcon } from "shared/assets";
import { classNames } from "shared/lib";
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
		<ul className={cls.list}>
			{viewTypes.map(({ id, view, Icon }) => (
				<li key={id} className={cls.listItem}>
					<Button name={view} onClick={handleButtonClick} theme={ButtonTheme.CLEAR}>
						<Icon className={classNames(cls.icon, { [cls.active]: view === activeView })} />
					</Button>
				</li>
			))}
		</ul>
	);
});
