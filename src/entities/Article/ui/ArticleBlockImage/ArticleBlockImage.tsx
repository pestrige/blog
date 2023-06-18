import { memo } from "react";
import { Text, TextDeprecated } from "@/shared/ui";
import { ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleBlockImage.module.scss";

interface Props {
	content: ArticleImageBlock;
}

export const ArticleBlockImage = memo(({ content }: Props): JSX.Element => {
	return (
		<div className="block-margin">
			<img className={cls.image} src={content.src} alt={content.title} />
			{!!content.title && (
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<Text text={content.title} align="center" />}
					off={<TextDeprecated text={content.title} align="center" />}
				/>
			)}
		</div>
	);
});
