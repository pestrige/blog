import { FC, lazy } from "react";
import { Props } from "./AddCommentForm";

export const AddCommentFormLazy = lazy<FC<Props>>(() => import("./AddCommentForm"));
