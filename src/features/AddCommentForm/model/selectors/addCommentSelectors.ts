import { StoreSchema } from "shared/config";
import { useSelector } from "react-redux";

export const getComment = (store: StoreSchema) => store.addCommentForm?.text ?? "";
export const useCommentSelector = () => useSelector(getComment);

export const getCommentError = (store: StoreSchema) => store.addCommentForm?.error ?? "";
export const useCommentErrorSelector = () => useSelector(getCommentError);
