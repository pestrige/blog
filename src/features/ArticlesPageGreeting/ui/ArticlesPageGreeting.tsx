import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Modal, TextDeprecated } from "@/shared/ui";
import { useArticlesPageGreeting } from "../hooks/useArticlesPageGreeting";

export const ArticlesPageGreeting = memo((): JSX.Element => {
	const { t } = useTranslation("articles");
	const { isOpen, onClose } = useArticlesPageGreeting();

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<TextDeprecated
				title={t("Добро подаловать на страницу статей")}
				text={t("Здесь вы можете искать и просматривать статьи на различные темы")}
			/>
		</Modal>
	);
});
