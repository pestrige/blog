import { memo, useCallback, useState } from "react";
import { StarIcon } from "@/shared/assets";
import { classNames } from "@/shared/lib";
import { HStack } from "../Stack";
import cls from "./StarRating.module.scss";

const STARS = [1, 2, 3, 4, 5];

interface Props {
	className?: string;
	size?: number;
	rating?: number;
	onSelect?: (rating: number) => void;
}

export const StarRating = memo(function StarRating({
	className = "",
	size = 30,
	rating = 0,
	onSelect,
}: Props): JSX.Element {
	const [hoveredRating, setHoveredRating] = useState(0);

	const handleHover = useCallback((currentRating: number) => {
		return () => setHoveredRating(currentRating);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setHoveredRating(0);
	}, []);

	const handleClick = useCallback(
		(rating: number) => {
			return () => {
				if (onSelect) {
					onSelect(rating);
				}
			};
		},
		[onSelect]
	);

	return (
		<HStack as="ul" className={classNames(className)} onMouseLeave={handleMouseLeave}>
			{STARS.map((star) => (
				<li key={star} onMouseEnter={handleHover(star)} onClick={handleClick(star)}>
					<StarIcon
						width={size}
						height={size}
						className={classNames(cls.star, {
							[cls.filled]: hoveredRating && !rating ? hoveredRating >= star : rating >= star,
							[cls.clicked]: !!rating,
						})}
					/>
				</li>
			))}
		</HStack>
	);
});
