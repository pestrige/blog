import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
	ButtonDeprecated,
	ButtonTheme,
	CardDeprecated,
	Drawer,
	HStack,
	InputDeprecated,
	Modal,
	StarRating,
	TextDeprecated,
	VStack,
} from "@/shared/ui";
import { useIsMobile } from "@/shared/hooks";
import { RatingCardExtendedProps } from "./RatingCard.props";
import cls from "./RatingCard.module.scss";

export const RatingCardDeprecated = memo(function RatingCardDeprecated({
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
				<TextDeprecated title={feedbackTitle} />
				<InputDeprecated
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
		<CardDeprecated className={className}>
			<VStack align="center">
				<TextDeprecated title={title} />
				<StarRating onSelect={onSelectStars} rating={selectedStars} />
			</VStack>

			{!isMobile && (
				<Modal isOpen={isModalOpen} onClose={onModalClose}>
					{content}
					<HStack justify="end" max className={cls.modalButtons}>
						<ButtonDeprecated
							dataTestId={`${testId}.CancelButton`}
							theme={ButtonTheme.OUTLINE_ERROR}
							onClick={onCancel}
						>
							{t("Отмена")}
						</ButtonDeprecated>
						<ButtonDeprecated dataTestId={`${testId}.SendButton`} onClick={onAccept}>
							{t("Отправить")}
						</ButtonDeprecated>
					</HStack>
				</Modal>
			)}

			{isMobile && (
				<Drawer isOpen={isModalOpen} onClose={onModalClose}>
					{content}
					<HStack justify="center" align="end" max className={cls.drawerButtons}>
						<ButtonDeprecated fullWidth onClick={onAccept}>
							{t("Отправить")}
						</ButtonDeprecated>
					</HStack>
				</Drawer>
			)}
		</CardDeprecated>
	);
});
