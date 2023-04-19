import { classNames } from "shared/lib/classNames/classNames";
import { InputHTMLAttributes, ChangeEvent, memo, useEffect, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly" | "name">;

interface Props extends HTMLInputProps {
	name: string;
	className?: string;
	value?: string;
	error?: string;
	onChange?: (value: string, name: string) => void;
	autofocus?: boolean;
	readonly?: boolean;

	dataTestInputId?: string;
	dataTestErrorId?: string;
}

export const Input = memo((props: Props) => {
	const {
		name,
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		autofocus = false,
		readonly = false,
		error = "",
		dataTestInputId,
		dataTestErrorId,
		...otherProps
	} = props;
	const ref = useRef<HTMLInputElement>(null);
	const wrapperClasses = classNames(cls.root, { [cls.readonly]: readonly }, className);

	const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.value, name);
	};

	useEffect(() => {
		if (autofocus) {
			ref.current?.focus();
		}
	}, [autofocus]);

	return (
		<div className={wrapperClasses}>
			<div className={cls.InputWrapper}>
				{placeholder && <label htmlFor={name} className={cls.placeholder}>{`${placeholder}>`}</label>}
				<div className={cls.caretWrapper}>
					<input
						id={name}
						name={name}
						ref={ref}
						type={type}
						value={value}
						onChange={onChangeHandler}
						className={cls.input}
						readOnly={readonly}
						data-testid={dataTestInputId}
						{...otherProps}
					/>
				</div>
			</div>
			{!!error && (
				<span className={cls.error} data-testid={dataTestErrorId}>
					{error}
				</span>
			)}
		</div>
	);
});
