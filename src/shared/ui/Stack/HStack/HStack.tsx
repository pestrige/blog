import { Flex, FlexProps } from "../Flex/Flex";
import { TestProps } from "@/shared/types";

interface Props extends TestProps, Omit<FlexProps, "direction"> {}

export const HStack = ({ children, ...props }: Props): JSX.Element => {
	return (
		<Flex direction="row" {...props}>
			{children}
		</Flex>
	);
};
