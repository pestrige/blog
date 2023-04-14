import { Flex, FlexProps } from "../Flex/Flex";

interface Props extends Omit<FlexProps, "direction"> {}

export const HStack = ({ children, ...props }: Props): JSX.Element => {
	return (
		<Flex direction="row" {...props}>
			{children}
		</Flex>
	);
};
