import React, { useState } from 'react';
import { classNames } from "shared/lib";
import { ThemeSwitcher } from "shared/ui";
import cls from "./Sidebar.module.scss";

interface Props {
	className?: string;
}

export const Sidebar = ({ className = "123" }: Props): JSX.Element => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const onToggle = () => setIsCollapsed((prev) => !prev);

	return (
	 <div className={classNames(cls.root, { [cls.collapsed]: isCollapsed }, className)}>
		 <button onClick={onToggle}>toggle</button>

		 <div className={cls.switches}>
			 <ThemeSwitcher/>
		 </div>
	 </div>
	);
};
