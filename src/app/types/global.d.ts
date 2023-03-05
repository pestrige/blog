declare module "*.scss" {
	const content: Record<string, string>;
	export default content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.svg" {
	import React from "react";

	const content: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;
