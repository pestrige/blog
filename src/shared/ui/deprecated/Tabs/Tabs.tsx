import { memo, ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib";
import { Card } from "../Card/Card";
import { HStack } from "../../redesigned/Stack";
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

/**
 * @deprecated
 */

export const Tabs = memo(function Tabs({ className, tabs, value, onTabClick }: Props): JSX.Element {
	const handleTabClick = useCallback(
		(tab: TabItem) => () => {
			return onTabClick(tab.value);
		},
		[onTabClick],
	);

	return (
		<HStack as="ul" className={className}>
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
		</HStack>
	);
});
