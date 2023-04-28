import { Menu } from "@headlessui/react";
import { Fragment, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib";
import { DropdownDirection } from "@/shared/types";
import { AppLink } from "../../AppLink";
import { mapDirectionClass } from "../constants";
import cls from "./Dropdown.module.scss";
import commonCls from "../common.module.scss";

export interface DropdownItem {
	disabled?: boolean;
	content: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface Props {
	className?: string;
	trigger: ReactNode;
	items: DropdownItem[];
	direction?: DropdownDirection;
}

export const Dropdown = memo(
	({ className, trigger, items, direction = "bottom left" }: Props): JSX.Element => {
		return (
			<Menu as="div" className={classNames(commonCls.wrapper, className)}>
				<Menu.Button
					as={typeof trigger === "string" ? "button" : "div"}
					className={commonCls.triggerButton}
				>
					{trigger}
				</Menu.Button>

				<Menu.Items
					as="ul"
					className={classNames(commonCls.list, cls.list, mapDirectionClass[direction])}
				>
					{items.map((item, index) => {
						return (
							<Menu.Item as={Fragment} key={index} disabled={item.disabled}>
								{({ active, close }) => (
									<li
										key={index}
										className={classNames(commonCls.listItem, {
											[commonCls.active]: active,
										})}
										onClick={item.onClick}
									>
										{!!item.href && (
											<AppLink noHover to={item.href} onClick={close}>
												{item.content}
											</AppLink>
										)}
										{!item.href && (
											<button
												type="button"
												className={commonCls.clearButton}
												onClick={item.onClick}
											>
												{item.content}
											</button>
										)}
									</li>
								)}
							</Menu.Item>
						);
					})}
				</Menu.Items>
			</Menu>
		);
	}
);
