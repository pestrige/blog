import React, { ReactNode, UIEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { classNames, toggleFeatures } from "@/shared/lib";
import { useAppDispatch, useDebounceCallback, useInfinityScroll, usePageClassName } from "@/shared/hooks";
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
	const [trigger, setTrigger] = useState<HTMLDivElement | null>(null);
	const scrollPosition = useScrollByPathSelector(pathname);
	const pageClassName = usePageClassName();

	const handleScrollChange = useDebounceCallback(({ target }: UIEvent<HTMLElement>) => {
		const position = toggleFeatures({
			name: "isAppRedesigned",
			on: () => window.scrollY,
			off: () => (target as HTMLElement)?.scrollTop,
		});
		dispatch(scrollActions.setScrollPosition({ path: pathname, position }));
	});

	useInfinityScroll({
		trigger,
		wrapper: toggleFeatures({
			name: "isAppRedesigned",
			on: () => null,
			off: () => wrapperRef.current,
		}),
		callback: onScrollEnd,
	});

	useEffect(() => {
		toggleFeatures({
			name: "isAppRedesigned",
			on: () => {
				if (scrollPosition) {
					window.scrollTo(0, scrollPosition);
				}
				window.addEventListener("scroll", handleScrollChange);
			},
			off: () => {
				if (wrapperRef.current) {
					wrapperRef.current.scrollTop = scrollPosition;
				}
			},
		});

		return () => {
			toggleFeatures({
				name: "isAppRedesigned",
				on: () => {
					window.removeEventListener("scroll", handleScrollChange);
				},
				off: () => null,
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleScrollChange]);

	return (
		<main
			data-testid={testId}
			ref={wrapperRef}
			className={classNames(pageClassName, className)}
			onScroll={handleScrollChange}
		>
			{children}
			<div ref={(ref) => (ref !== null ? setTrigger(ref) : undefined)} className={cls.trigger} />
		</main>
	);
};
