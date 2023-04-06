import { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib";
import { Card } from "shared/ui";
import cls from "./Tabs.module.scss";

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface Props {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (value: string) => void;
}

export const Tabs = memo(function Tabs({ className, tabs, value, onTabClick }: Props): JSX.Element {
	const handleTabClick = useCallback(
		(tab: TabItem) => () => {
			return onTabClick(tab.value);
		},
		[onTabClick]
	);

	return (
		<ul className={classNames(cls.list, className)}>
			{tabs.map((tab) => {
				const active = tab.value === value;

				return (
					<li key={tab.value} className={classNames(cls.tab, { [cls.active]: active })}>
						<Card onClick={handleTabClick(tab)} variant={active ? "primary" : "outlined"}>
							{tab.content}
						</Card>
					</li>
				);
			})}
		</ul>
	);
});
