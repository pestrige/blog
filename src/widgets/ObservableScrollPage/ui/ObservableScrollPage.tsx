import React, { ReactNode, UIEvent, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { classNames } from "@/shared/lib";
import { useAppDispatch, useDebounceCallback, useInfinityScroll } from "@/shared/hooks";
import { useScrollByPathSelector } from "../model/selectors/selectors";
import cls from "./ObservableScrollPage.module.scss";
import { scrollActions } from "../model/slice/scrollSlice";

interface Props {
	className?: string;
	children: ReactNode;
	testId?: string;
	onScrollEnd: () => void;
}

export const ObservableScrollPage = ({ className, children, testId, onScrollEnd }: Props): JSX.Element => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const wrapperRef = useRef<HTMLElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);
	const scrollPosition = useScrollByPathSelector(pathname);

	const handleScrollChange = useDebounceCallback(({ target }: UIEvent<HTMLElement>) => {
		const position = (target as HTMLElement)?.scrollTop;
		dispatch(scrollActions.setScrollPosition({ path: pathname, position }));
	});

	useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

	useLayoutEffect(() => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = scrollPosition;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main
			data-testid={testId}
			ref={wrapperRef}
			className={classNames("page", className)}
			onScroll={handleScrollChange}
		>
			{children}
			<div ref={triggerRef} className={cls.trigger} />
		</main>
	);
};
