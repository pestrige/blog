import { memo } from "react";
import { AppLink, AppLinkDeprecated, Card, CardDeprecated, Text, TextDeprecated } from "@/shared/ui";
import { Notification } from "../../model/types/notifications";
import cls from "./NotificationItem.module.scss";
import { ToggleFeaturesWrapper } from "@/shared/lib";

interface Props {
	notification: Notification;
}

export const NotificationItem = memo(({ notification }: Props): JSX.Element => {
	const { title, description, href } = notification;

	return (
		<li className={cls.item}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={
					<Card paddings="sm">
						<Text title={title} text={href ? undefined : description} />
						{href && (
							<AppLink to={href}>
								<Text variant="accent" text={description} />
							</AppLink>
						)}
					</Card>
				}
				off={
					<CardDeprecated variant="outlined">
						<TextDeprecated title={title} text={href ? undefined : description} />
						{href && (
							<AppLinkDeprecated to={href}>
								<TextDeprecated text={description} />
							</AppLinkDeprecated>
						)}
					</CardDeprecated>
				}
			/>
		</li>
	);
});
