declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.svg" {
	const content: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default content;
}
