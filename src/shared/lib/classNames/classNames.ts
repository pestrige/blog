type Argument = Record<string, string | boolean> | string | undefined;

export const classNames = (className: string, ...args: Argument[]): string => {
	const classes = [className];

	args.forEach((argument) => {
		if (!argument) {
			return;
		}

		if (typeof argument === 'string') {
			classes.push(argument);
		} else {
			const classesFromObject = Object.keys(argument).filter((cls) => !!argument[cls]);
			classes.push(...classesFromObject);
		}
	});

	return classes.join(' ');
};
