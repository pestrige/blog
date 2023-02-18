import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";

interface Props {
	className?: string;
}

export const Navbar = ({ className }: Props): JSX.Element => {
	return (
		<div className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				<li className={cls.mainLink}>/</li>
			</ul>
		</div>
	);
};
