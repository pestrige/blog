import React, { memo, useCallback, useMemo, useState } from "react";
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
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo(function RatingCard({
	className,
	title,
	feedbackTitle,
	onCancel,
	onAccept,
}: Props): JSX.Element {
	const { t } = useTranslation();
	const isMobile = useIsMobile();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedStars, setSelectedStars] = useState(0);
	const [feedback, setFeedback] = useState("");

	const handleSelectStars = useCallback(
		(rating: number) => {
			setSelectedStars(rating);
			if (feedbackTitle) {
				setIsModalOpen(true);
				return;
			}

			onAccept?.(rating);
		},
		[feedbackTitle, onAccept]
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
				<Input name="feedback" placeholder={t("Ваш отзыв")} onChange={handleInput} value={feedback} />
			</VStack>
		),
		[feedbackTitle, t, handleInput, feedback]
	);

	return (
		<Card className={className}>
			<VStack align="center">
				<Text title={title} />
				<StarRating onSelect={handleSelectStars} />
			</VStack>

			{!isMobile && (
				<Modal isOpen={isModalOpen} onClose={handleModalClose}>
					{content}
					<HStack justify="end" max>
						<Button theme={ButtonTheme.OUTLINE_ERROR} onClick={handleCancel}>
							{t("Отмена")}
						</Button>
						<Button onClick={handleAccept}>{t("Отправить")}</Button>
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
