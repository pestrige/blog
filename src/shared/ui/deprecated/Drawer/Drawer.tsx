import { MouseEvent, ReactNode, useCallback, useEffect } from "react";
import { useModal } from "@/shared/hooks";
import { classNames } from "@/shared/lib";
import { AnimationProvider, useAnimationContext } from "@/shared/providers";
import { Portal } from "../../redesigned/Portal/Portal";
import { Overlay } from "../../redesigned/Overlay/Overlay";
import { Loader } from "../../redesigned/Loader";
import cls from "./Drawer.module.scss";

const height = window.innerHeight - 100;

interface DrawerProps {
	className?: string;
	isOpen: boolean;
	children: ReactNode;
	onClose: () => void;
}

const DrawerContent = ({ isOpen, children, className, onClose }: DrawerProps): JSX.Element | null => {
	const { Spring, Gesture } = useAnimationContext();
	const { isClosing, handleClose } = useModal(onClose);
	const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

	const handleOpenDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false });
	}, [api]);

	const handleCloseDrawer = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
			onResolve: handleClose,
		});
	};

	const handleContentClick = useCallback((evt: MouseEvent<HTMLDivElement>) => {
		evt.stopPropagation();
	}, []);

	const bind = Gesture.useDrag(
		({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
			if (my < -70) cancel();

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					handleCloseDrawer();
				} else {
					handleOpenDrawer();
				}
			} else {
				api.start({ y: my, immediate: true });
			}
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true,
		},
	);

	const display = y.to((py) => (py < height ? "block" : "none"));

	useEffect(() => {
		if (isOpen) {
			handleOpenDrawer();
		}
	}, [isOpen, handleOpenDrawer]);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.drawer, className)}>
				<Overlay onClose={handleCloseDrawer} isOpen={isOpen} isClose={isClosing}>
					<Spring.a.div
						onClick={handleContentClick}
						className={cls.sheet}
						style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
						{...bind()}
					>
						{children}
					</Spring.a.div>
				</Overlay>
			</div>
		</Portal>
	);
};

const DrawerAsync = ({ children, ...otherProps }: DrawerProps) => {
	const { isLoaded } = useAnimationContext();

	if (!isLoaded) {
		return <Loader />;
	}

	return <DrawerContent {...otherProps}>{children}</DrawerContent>;
};

/**
 * @deprecated
 */

export const Drawer = ({ children, ...otherProps }: DrawerProps): JSX.Element => (
	<AnimationProvider>
		<DrawerAsync {...otherProps}>{children}</DrawerAsync>
	</AnimationProvider>
);
