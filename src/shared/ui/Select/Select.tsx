import { memo, useCallback, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "shared/lib";
import { Button, HStack } from "shared/ui";
import cls from "./Select.module.scss";

export interface SelectOption {
	value: string;
	content: string;
	disabled?: boolean;
}

interface SelectProps {
	name: string;
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string, name: string) => void;
	readonly?: boolean;
}

export const Select = memo(function Select(props: SelectProps): JSX.Element {
	const { name, className, label, options, onChange, value, readonly } = props;

	const onChangeHandler = useCallback(
		(value: string) => {
			if (onChange) {
				onChange(value, name);
			}
		},
		[onChange, name]
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
				className={cls.wrapper}
			>
				{({ open }) => (
					<>
						<Listbox.Button as="div">
							<Button
								disabled={readonly}
								className={classNames(cls.button, { [cls.open]: open })}
							>
								{value}
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
							<Listbox.Options className={cls.list} static>
								{(options ?? []).map((item) => (
									<Listbox.Option
										as={Fragment}
										key={item.value}
										value={item.value}
										disabled={item.disabled}
									>
										{({ selected, active }) => (
											<li
												className={classNames(cls.listItem, {
													[cls.selected]: selected,
													[cls.active]: active,
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
