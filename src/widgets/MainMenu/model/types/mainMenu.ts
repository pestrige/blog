import React from "react";

export interface MainMenuItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
