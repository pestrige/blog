import { ReactNode } from "react";
import { createPortal } from "react-dom";

const rootElement = document.getElementById("root") as HTMLElement;

interface Props {
	children: ReactNode;
	target?: HTMLElement;
}

/**
 * @deprecated
 */

export const Portal = ({ children, target = rootElement }: Props): JSX.Element => {
	return createPortal(children, target);
};
