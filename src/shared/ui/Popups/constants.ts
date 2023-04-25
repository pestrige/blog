import { DropdownDirection } from "shared/types";
import commonCls from "./common.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
	"top left": commonCls.topLeft,
	"top right": commonCls.topRight,
	"bottom left": commonCls.bottomLeft,
	"bottom right": commonCls.bottomRight,
};
