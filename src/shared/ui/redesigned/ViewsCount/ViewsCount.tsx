import React, { memo } from "react";
import { EyeIcon } from "@/shared/assets";
import { HStack } from "../Stack";
import { Text } from "../Text/Text";
import cls from "./ViewsCount.module.scss";

interface Props {
	className?: string;
	views: number;
}

export const ViewsCount = memo(function ViewsCount({ className, views }: Props): JSX.Element {
	return (
		<HStack gap={8} className={className}>
			<EyeIcon className={cls.eye} />
			<Text text={views.toString()} />
		</HStack>
	);
});
