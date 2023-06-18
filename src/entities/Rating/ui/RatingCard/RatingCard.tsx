import React, { memo, useCallback, useEffect, useState } from "react";

import { ToggleFeaturesWrapper } from "@/shared/lib";
import { RatingCardDeprecated } from "./RatingCardDeprecated";
import { RatingCardBaseProps } from "./RatingCard.props";
import { RatingCardRedesigned } from "./RatingCardRedesigned";

export const RatingCard = memo(function RatingCard(props: RatingCardBaseProps): JSX.Element {
	const { className, title, feedbackTitle, rating, testId = "RatingCard", onCancel, onAccept } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedStars, setSelectedStars] = useState(rating ?? 0);
	const [feedback, setFeedback] = useState("");

	const handleSelectStars = useCallback(
		(selectedRating: number) => {
			if (rating) {
				return;
			}

			setSelectedStars(selectedRating);
			if (feedbackTitle) {
				setIsModalOpen(true);
				return;
			}

			onAccept?.(selectedRating);
		},
		[rating, feedbackTitle, onAccept],
	);

	const handleInput = useCallback((value: string) => {
		setFeedback(value);
	}, []);

	const handleModalClose = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const handleCancel = useCallback(() => {
		setIsModalOpen(false);
		onCancel?.(selectedStars);
	}, [onCancel, selectedStars]);

	const handleAccept = useCallback(() => {
		setIsModalOpen(false);
		onAccept?.(selectedStars, feedback);
	}, [onAccept, selectedStars, feedback]);

	useEffect(() => {
		if (rating) {
			setSelectedStars(rating);
		}
	}, [rating]);

	const ratingProps = {
		className,
		title,
		feedbackTitle,
		testId,
		isModalOpen,
		feedback,
		selectedStars,
		onSelectStars: handleSelectStars,
		onInput: handleInput,
		onModalClose: handleModalClose,
		onCancel: handleCancel,
		onAccept: handleAccept,
	};

	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<RatingCardRedesigned {...ratingProps} />}
			off={<RatingCardDeprecated {...ratingProps} />}
		/>
	);
});
