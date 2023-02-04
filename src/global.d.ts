// declare module '*.scss' {
// 	interface IClassNames {
// 		[className: string]: string
// 	}
// 	const classnames: IClassNames;
// 	export = classnames;
// }

// declaration.d.ts
declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
