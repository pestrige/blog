import { classNames } from "shared/lib";
import cls from "./Loader.module.scss";

interface Props {
	className?: string;
}

export const Loader = ({ className }: Props): JSX.Element => {
	return (
		<div className={classNames(cls.ring, className)}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
