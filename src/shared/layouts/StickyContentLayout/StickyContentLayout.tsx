import { ReactElement } from "react";
import { classNames } from "@/shared/lib";
import cls from "./StickyContentLayout.module.scss";

interface StickyContentLayoutProps {
	className?: string;
	left?: ReactElement;
	content: ReactElement;
	right?: ReactElement;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
	const { className, content, left, right } = props;

	return (
		<div className={classNames(cls.root, className)}>
			{left && <div className={cls.left}>{left}</div>}
			<div className={cls.content}>{content}</div>
			{right && <div className={cls.right}>{right}</div>}
		</div>
	);
};
