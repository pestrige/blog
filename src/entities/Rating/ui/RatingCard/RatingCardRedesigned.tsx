import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Drawer, HStack, Input, Modal, StarRating, Text, VStack } from "@/shared/ui";
import { useIsMobile } from "@/shared/hooks";
import { RatingCardExtendedProps } from "./RatingCard.props";
import cls from "./RatingCard.module.scss";

export const RatingCardRedesigned = memo(function RatingCardRedesigned({
	className,
	title,
	feedbackTitle,
	testId = "RatingCard",
	isModalOpen,
	feedback,
	selectedStars,
	onSelectStars,
	onInput,
	onModalClose,
	onCancel,
	onAccept,
}: RatingCardExtendedProps): JSX.Element {
	const { t } = useTranslation();
	const isMobile = useIsMobile();

	const content = useMemo(
		() => (
			<VStack gap={32} max>
				<Text title={feedbackTitle} />
				<Input
					dataTestInputId={`${testId}.Input`}
					name="feedback"
					placeholder={t("Ваш отзыв")}
					onChange={onInput}
					value={feedback}
				/>
			</VStack>
		),
		[feedbackTitle, t, onInput, feedback, testId],
	);

	return (
		<Card className={className}>
			<VStack align="center">
				<Text title={title} />
				<StarRating onSelect={onSelectStars} rating={selectedStars} />
			</VStack>

			{!isMobile && (
				<Modal isOpen={isModalOpen} onClose={onModalClose}>
					{content}
					<HStack justify="end" max className={cls.modalButtons}>
						<Button
							dataTestId={`${testId}.CancelButton`}
							variant="rounded-outline"
							borderColor="error"
							onClick={onCancel}
						>
							{t("Отмена")}
						</Button>
						<Button
							variant="rounded-outline"
							dataTestId={`${testId}.SendButton`}
							onClick={onAccept}
						>
							{t("Отправить")}
						</Button>
					</HStack>
				</Modal>
			)}

			{isMobile && (
				<Drawer isOpen={isModalOpen} onClose={onModalClose}>
					{content}
					<HStack justify="center" align="end" max className={cls.drawerButtons}>
						<Button variant="rounded-outline" fullWidth onClick={onAccept}>
							{t("Отправить")}
						</Button>
					</HStack>
				</Drawer>
			)}
		</Card>
	);
});
