import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib";
import { CopyIcon } from "@/shared/assets";
import { Button, ButtonTheme } from "../Button";
import cls from "./Code.module.scss";

interface Props {
	className?: string;
	text: string;
}

/**
 * @deprecated
 */

export const Code = memo(({ text, className = "" }: Props): JSX.Element => {
	const handleCopy = useCallback(async () => {
		await navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.code, className)}>
			<Button theme={ButtonTheme.CLEAR} className={cls.button} onClick={handleCopy}>
				<CopyIcon className={cls.icon} />
			</Button>
			<code>{text}</code>
		</pre>
	);
});
