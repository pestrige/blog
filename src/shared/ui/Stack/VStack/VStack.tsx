import { Flex, FlexProps } from "../Flex/Flex";

interface Props extends Omit<FlexProps, "direction"> {}

export const VStack = ({ children, align = "start", ...props }: Props): JSX.Element => {
	return (
		<Flex direction="column" align={align} {...props}>
			{children}
		</Flex>
	);
};
