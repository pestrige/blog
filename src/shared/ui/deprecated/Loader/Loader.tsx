import { classNames } from "@/shared/lib";
import cls from "./Loader.module.scss";

type LoaderSize = "S" | "M" | "L";

interface Props {
	className?: string;
	size?: LoaderSize;
}

/**
 * @deprecated
 */

export const Loader = ({ className, size = "L" }: Props): JSX.Element => {
	return (
		<div className={classNames(cls.ring, cls[size], className)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
