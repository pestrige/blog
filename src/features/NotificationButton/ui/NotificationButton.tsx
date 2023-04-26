import React, { HTMLAttributes, memo, useCallback, useState } from "react";
import { NotificationList } from "entities/Notification";
import { AnimationProvider } from "shared/providers";
import { Button, ButtonTheme, Drawer, Popover } from "shared/ui";
import { useIsMobile } from "shared/hooks";
import { NotificationIcon } from "shared/assets";
import cls from "./NotificationButton.module.scss";

const TriggerButton = memo(function TriggerButton(props: HTMLAttributes<HTMLButtonElement>): JSX.Element {
	return (
		<Button theme={ButtonTheme.CLEAR} {...props}>
			<NotificationIcon className={cls.notification} />
		</Button>
	);
});

export const NotificationButton = memo(function NotificationButton(): JSX.Element {
	const isMobile = useIsMobile();
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
						<AnimationProvider>
							<Drawer isOpen={isOpen} onClose={handleCloseClick}>
								<NotificationList />
							</Drawer>
						</AnimationProvider>
					)}
				</>
			)}
			{!isMobile && (
				<Popover direction="bottom right" trigger={<TriggerButton />}>
					<NotificationList className={cls.notifications} />
				</Popover>
			)}
		</li>
	);
});
