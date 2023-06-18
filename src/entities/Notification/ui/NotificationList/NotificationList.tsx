import React, { memo } from "react";
import { Skeleton, VStack } from "@/shared/ui";
import { useNotifications } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";

const REQUEST_INTERVAL = 10000;
const NOTIFICATIONS_SKELETON = [1, 2, 3];

interface Props {
	className?: string;
}

export const NotificationList = memo(function NotificationList({ className }: Props): JSX.Element {
	const { data, isLoading } = useNotifications(null, { pollingInterval: REQUEST_INTERVAL });

	if (isLoading) {
		return (
			<VStack as="ul" gap={16} max className={className}>
				{NOTIFICATIONS_SKELETON.map((idx) => (
					<Skeleton key={idx} width="100%" border="8px" height="80px" />
				))}
			</VStack>
		);
	}

	return (
		<VStack as="ul" gap={16} max className={className}>
			{(data ?? []).map((notification) => {
				return <NotificationItem key={notification.id} notification={notification} />;
			})}
		</VStack>
	);
});
