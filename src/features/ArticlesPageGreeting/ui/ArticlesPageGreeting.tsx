import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Text, TextDeprecated } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { useArticlesPageGreeting } from "../hooks/useArticlesPageGreeting";

export const ArticlesPageGreeting = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { isOpen, onClose } = useArticlesPageGreeting();

	const textProps = {
		title: t("Добро подаловать на страницу статей"),
		text: t("Здесь вы можете искать и просматривать статьи на различные темы"),
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ToggleFeaturesWrapper
				featureName="isAppRedesigned"
				on={<Text {...textProps} />}
				off={<TextDeprecated {...textProps} />}
			/>
		</Modal>
	);
});
