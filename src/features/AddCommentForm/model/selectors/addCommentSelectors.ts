import { StoreSchema } from "@/shared/config";
import { buildSelector } from "@/shared/lib";

export const [useCommentSelector, getComment] = buildSelector(
	(store: StoreSchema) => store.addCommentForm?.text ?? ""
);

export const [useCommentErrorSelector, getCommentError] = buildSelector(
	(store: StoreSchema) => store.addCommentForm?.error ?? ""
);
