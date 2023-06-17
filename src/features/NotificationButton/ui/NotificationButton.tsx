import React, { HTMLAttributes, memo, useCallback, useState } from "react";
import { NotificationList } from "@/entities/Notification";
import { ButtonDeprecated, ButtonIcon, ButtonTheme, Drawer, Popover, PopoverDeprecated } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { useIsMobile } from "@/shared/hooks";
import { NotificationIcon, NotificationIconDeprecated } from "@/shared/assets";
import cls from "./NotificationButton.module.scss";

interface TriggerButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
	onClick?: () => void;
}

const TriggerButton = memo(function TriggerButton(props: TriggerButtonProps): JSX.Element {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<ButtonIcon Svg={NotificationIcon} onClick={props.onClick} />}
			off={
				<ButtonDeprecated theme={ButtonTheme.CLEAR} {...props}>
					<NotificationIconDeprecated className={cls.notification} />
				</ButtonDeprecated>
			}
		/>
	);
});

export const NotificationButton = memo(function NotificationButton(): JSX.Element {
	const isMobile = useIsMobile();
	console.log("isMobile", isMobile);
	const [isOpen, setIsOpen] = useState(false);

	const handleCloseClick = useCallback(() => {
		setIsOpen(false);
	}, []);

	const handleOpenClick = useCallback(() => {
		setIsOpen(true);
	}, []);

	return (
		<li>
			{isMobile && (
				<>
					<TriggerButton onClick={handleOpenClick} />
					{isOpen && (
						<Drawer isOpen={isOpen} onClose={handleCloseClick}>
							<NotificationList />
						</Drawer>
					)}
				</>
			)}
			{!isMobile && (
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={
						<Popover direction="bottom right" trigger={<TriggerButton />}>
							<NotificationList className={cls.notifications} />
						</Popover>
					}
					off={
						<PopoverDeprecated direction="bottom right" trigger={<TriggerButton />}>
							<NotificationList className={cls.notifications} />
						</PopoverDeprecated>
					}
				/>
			)}
		</li>
	);
});
