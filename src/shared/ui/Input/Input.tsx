import { classNames } from "shared/lib/classNames/classNames";
import { InputHTMLAttributes, ChangeEvent, memo, useEffect, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface Props extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	const { className, value, onChange, type = "text", placeholder, autofocus, ...otherProps } = props;

	const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.value);
	};

	useEffect(() => {
		if (autofocus) {
			ref.current?.focus();
		}
	}, [autofocus]);

	return (
		<div className={classNames(cls.InputWrapper, className)}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					{...otherProps}
				/>
			</div>
		</div>
	);
});
