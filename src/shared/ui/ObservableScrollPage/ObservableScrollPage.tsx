import React, { ReactNode, useRef } from "react";
import { classNames } from "shared/lib";
import { useInfinityScroll } from "shared/hooks";
import cls from "./ObservableScrollPage.module.scss";

interface Props {
	className?: string;
	children: ReactNode;
	onScrollEnd: () => void;
}

export const ObservableScrollPage = ({ className, children, onScrollEnd }: Props): JSX.Element => {
	const wrapperRef = useRef<HTMLElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);

	useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

	return (
		<main ref={wrapperRef} className={classNames("page", className)}>
			{children}
			<div ref={triggerRef} className={cls.trigger} />
		</main>
	);
};
