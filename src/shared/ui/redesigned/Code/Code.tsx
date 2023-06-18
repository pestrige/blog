import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib";
import { CopyIcon } from "@/shared/assets";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import cls from "./Code.module.scss";

interface Props {
	className?: string;
	text: string;
}

export const Code = memo(({ text, className = "" }: Props): JSX.Element => {
	const handleCopy = useCallback(async () => {
		await navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.code, className)}>
			<ButtonIcon Svg={CopyIcon} className={cls.button} onClick={handleCopy} />
			<code>{text}</code>
		</pre>
	);
});
