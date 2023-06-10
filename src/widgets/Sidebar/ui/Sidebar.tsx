import { memo, useCallback, useState } from "react";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { SidebarDeprecated } from "./SidebarDeprecated";
import { SidebarRedesigned } from "./SidebarRedesigned";

export interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className = "" }: SidebarProps): JSX.Element => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleToggle = useCallback(() => setIsCollapsed((prev) => !prev), []);

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<SidebarRedesigned isCollapsed={isCollapsed} onToggle={handleToggle} className={className} />}
			off={
				<SidebarDeprecated isCollapsed={isCollapsed} onToggle={handleToggle} className={className} />
			}
		/>
	);
});
