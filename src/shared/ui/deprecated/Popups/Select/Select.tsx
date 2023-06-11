import { useCallback, Fragment, useMemo } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "@/shared/lib";
import { Button } from "../../Button";
import { HStack } from "../../../redesigned/Stack";
import cls from "./Select.module.scss";
import commonCls from "../common.module.scss";
import { typedMemo } from "@/shared/constants";

export interface SelectOption<T> {
	value: T;
	content: string;
	disabled?: boolean;
}

interface SelectProps<T extends string> {
	name: string;
	className?: string;
	label?: string;
	options?: SelectOption<T>[];
	value?: T;
	onChange?: (value: T, name: string) => void;
	readonly?: boolean;
}

/**
 * @deprecated
 */

export const Select = typedMemo(function Select<T extends string>(props: SelectProps<T>): JSX.Element {
	const { name, className, label, options, onChange, value, readonly } = props;
	const selected = useMemo(() => options?.find((option) => option.value === value), [options, value]);

	const onChangeHandler = useCallback(
		(value: string) => {
			if (onChange) {
				onChange(value as T, name);
			}
		},
		[onChange, name],
	);

	return (
		<HStack className={className}>
			{label && <span className={cls.label}>{`${label}>`}</span>}

			<Listbox
				as="div"
				value={value}
				defaultValue={label}
				onChange={onChangeHandler}
				disabled={readonly}
				className={commonCls.wrapper}
			>
				{({ open }) => (
					<>
						<Listbox.Button as="div">
							<Button
								disabled={readonly}
								className={classNames(cls.button, { [cls.open]: open })}
							>
								{selected?.content ?? "..."}
							</Button>
						</Listbox.Button>
						<Transition
							show={open}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Listbox.Options className={classNames(commonCls.list, cls.list)} static as="ul">
								{(options ?? []).map((item) => (
									<Listbox.Option
										as={Fragment}
										key={item.value}
										value={item.value}
										disabled={item.disabled}
									>
										{({ selected, active }) => (
											<li
												className={classNames(commonCls.listItem, {
													[commonCls.selected]: selected,
													[commonCls.active]: active,
												})}
											>
												{item.content}
											</li>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</>
				)}
			</Listbox>
		</HStack>
	);
});
