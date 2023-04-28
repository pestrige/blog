import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

const getScrollPosition = (store: StoreSchema) => store.scroll.scroll;
const getScrollByPath = createSelector(
	getScrollPosition,
	(store: StoreSchema, path: string) => path,
	(scroll, path) => scroll[path] ?? 0
);

export const useScrollByPathSelector = (path: string) =>
	useSelector((store: StoreSchema) => getScrollByPath(store, path));
