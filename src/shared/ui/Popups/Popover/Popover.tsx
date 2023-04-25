import { memo, ReactNode } from "react";
import { Popover as PopoverHL } from "@headlessui/react";
import { DropdownDirection } from "shared/types";
import { classNames } from "shared/lib";
import cls from "./Popover.module.scss";
import commonCls from "../common.module.scss";
import { mapDirectionClass } from "../constants";

interface Props {
	trigger: ReactNode;
	direction?: DropdownDirection;
	children: ReactNode;
	className?: string;
}

export const Popover = memo(function Popover({
	trigger,
	children,
	direction = "bottom left",
	className,
}: Props): JSX.Element {
	return (
		<PopoverHL className={classNames(commonCls.wrapper, className)}>
			<PopoverHL.Button
				as={typeof trigger === "string" ? "button" : "div"}
				className={commonCls.triggerButton}
			>
				{trigger}
			</PopoverHL.Button>

			<PopoverHL.Panel className={classNames(commonCls.list, cls.panel, mapDirectionClass[direction])}>
				{children}
			</PopoverHL.Panel>
		</PopoverHL>
	);
});
