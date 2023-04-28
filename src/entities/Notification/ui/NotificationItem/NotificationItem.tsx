import { memo } from "react";
import { AppLink, Card, Text } from "@/shared/ui";
import { Notification } from "../../model/types/notifications";
import cls from "./NotificationItem.module.scss";

interface Props {
	notification: Notification;
}

export const NotificationItem = memo(({ notification }: Props): JSX.Element => {
	const { title, description, href } = notification;

	return (
		<li className={cls.item}>
			<Card variant="outlined">
				<Text title={title} text={href ? undefined : description} />
				{href && (
					<AppLink to={href}>
						<Text text={description} />
					</AppLink>
				)}
			</Card>
		</li>
	);
});
