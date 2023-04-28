import { useSelector } from "react-redux";
import { StoreSchema } from "@/shared/config";

export const getComment = (store: StoreSchema) => store.addCommentForm?.text ?? "";
export const useCommentSelector = () => useSelector(getComment);

export const getCommentError = (store: StoreSchema) => store.addCommentForm?.error ?? "";
export const useCommentErrorSelector = () => useSelector(getCommentError);
