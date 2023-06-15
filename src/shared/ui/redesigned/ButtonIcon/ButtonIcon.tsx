import { FC, memo, MouseEvent, SVGProps } from "react";
import { classNames } from "@/shared/lib";
import cls from "./ButtonIcon.module.scss";

type SvgProps = Omit<SVGProps<SVGSVGElement>, "onClick">;

interface IconProps extends SvgProps {
	name?: string;
	className?: string;
	Svg: FC<SVGProps<SVGSVGElement>>;
	onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonIcon = memo((props: IconProps) => {
	const { name, className, Svg, width = 32, height = 32, onClick, ...otherProps } = props;

	return (
		<button name={name} type="button" className={cls.button} onClick={onClick} style={{ height, width }}>
			<Svg className={classNames(cls.Icon, className)} width={width} height={height} {...otherProps} />
		</button>
	);
});
