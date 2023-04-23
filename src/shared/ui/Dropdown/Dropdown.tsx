import { Menu } from "@headlessui/react";
import { Fragment, memo, ReactNode } from "react";
import { classNames } from "shared/lib";
import { DropdownDirection } from "shared/types";
import { AppLink } from "../AppLink";
import cls from "./Dropdown.module.scss";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
	"top left": cls.topLeft,
	"top right": cls.topRight,
	"bottom left": cls.bottomLeft,
	"bottom right": cls.bottomRight,
};

export const Dropdown = memo(
	({ className, trigger, items, direction = "bottom left" }: Props): JSX.Element => {
		return (
			<Menu as="div" className={classNames(cls.wrapper, className)}>
				<Menu.Button as={typeof trigger === "string" ? "button" : "div"} className={cls.button}>
					{trigger}
				</Menu.Button>

				<Menu.Items as="ul" className={classNames(cls.menu, mapDirectionClass[direction])}>
					{items.map((item, index) => {
						return (
							<Menu.Item as={Fragment} key={index} disabled={item.disabled}>
								{({ active, close }) => (
									<li
										key={index}
										className={classNames(cls.item, { [cls.active]: active })}
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
												className={cls.itemButton}
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
