import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	ButtonTheme,
	Button,
	Card,
	HStack,
	Input,
	Modal,
	StarRating,
	Text,
	VStack,
	Drawer,
} from "@/shared/ui";
import { useIsMobile } from "@/shared/hooks";
import cls from "./RatingCard.module.scss";

interface Props {
	className?: string;
	title: string;
	feedbackTitle?: string;
	rating?: number;
	testId?: string;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(function RatingCard({
	className,
	title,
	feedbackTitle,
	rating,
	testId = "RatingCard",
	onCancel,
	onAccept,
}: Props): JSX.Element {
	const { t } = useTranslation();
	const isMobile = useIsMobile();
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

	const content = useMemo(
		() => (
			<VStack gap={32} max>
				<Text title={feedbackTitle} />
				<Input
					dataTestInputId={`${testId}.Input`}
					name="feedback"
					placeholder={t("Ваш отзыв")}
					onChange={handleInput}
					value={feedback}
				/>
			</VStack>
		),
		[feedbackTitle, t, handleInput, feedback, testId],
	);

	useEffect(() => {
		if (rating) {
			setSelectedStars(rating);
		}
	}, [rating]);

	return (
		<Card className={className}>
			<VStack align="center">
				<Text title={title} />
				<StarRating onSelect={handleSelectStars} rating={selectedStars} />
			</VStack>

			{!isMobile && (
				<Modal isOpen={isModalOpen} onClose={handleModalClose}>
					{content}
					<HStack justify="end" max className={cls.modalButtons}>
						<Button
							dataTestId={`${testId}.CancelButton`}
							theme={ButtonTheme.OUTLINE_ERROR}
							onClick={handleCancel}
						>
							{t("Отмена")}
						</Button>
						<Button dataTestId={`${testId}.SendButton`} onClick={handleAccept}>
							{t("Отправить")}
						</Button>
					</HStack>
				</Modal>
			)}

			{isMobile && (
				<Drawer isOpen={isModalOpen} onClose={handleModalClose}>
					{content}
					<HStack justify="center" align="end" max className={cls.drawerButtons}>
						<Button fullWidth onClick={handleAccept}>
							{t("Отправить")}
						</Button>
					</HStack>
				</Drawer>
			)}
		</Card>
	);
});
