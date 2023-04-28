import { useDispatch } from "react-redux";
import { AppDispatch } from "@/shared/config";

export const useAppDispatch = () => useDispatch<AppDispatch>();
