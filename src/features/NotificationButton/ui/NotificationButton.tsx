import React, { memo } from "react";
import { NotificationList } from "entities/Notification";
import { Button, ButtonTheme, Popover } from "shared/ui";
import { NotificationIcon } from "shared/assets";
import cls from "./NotificationButton.module.scss";

export const NotificationButton = memo(function NotificationButton(): JSX.Element {
	return (
		<li>
			<Popover
				direction="bottom right"
				trigger={
					<Button theme={ButtonTheme.CLEAR}>
						<NotificationIcon className={cls.notification} />
					</Button>
				}
			>
				<NotificationList className={cls.notifications} />
			</Popover>
		</li>
	);
});
