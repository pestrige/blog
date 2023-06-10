import { ReactElement } from "react";
import { classNames } from "@/shared/lib";
import cls from "./MainLayout.module.scss";

interface Props {
	className?: string;
	header: ReactElement;
	content: ReactElement;
	sidebar: ReactElement;
	toolbar?: ReactElement;
}

export const MainLayout = ({ className, header, content, sidebar, toolbar }: Props): JSX.Element => {
	return (
		<div className={classNames(cls.root, className)}>
			<div className={cls.sidebar}>{sidebar}</div>
			<div className={cls.content}>{content}</div>
			<div className={cls.rightbar}>
				<div className={cls.header}>{header}</div>
				<div className={cls.toolbar}>{toolbar}</div>
			</div>
		</div>
	);
};
