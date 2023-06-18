import { memo } from "react";
import { Text, TextDeprecated } from "@/shared/ui";
import { classNames, ToggleFeaturesWrapper } from "@/shared/lib";
import { ArticleTextBlock } from "../../model/types/article";

interface Props {
	content: ArticleTextBlock;
	className?: string;
}

export const ArticleBlockText = memo(({ content, className = "" }: Props): JSX.Element => {
	return (
		<div className={classNames("block-margin", className)}>
			{!!content.title && (
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<Text className="block-margin" title={content.title} />}
					off={<TextDeprecated className="block-margin" title={content.title} />}
				/>
			)}

			{content.paragraphs.map((paragraph) => (
				<ToggleFeaturesWrapper
					featureName="isAppRedesigned"
					on={<Text key={paragraph} className="block-margin" text={paragraph} />}
					off={<TextDeprecated key={paragraph} className="block-margin" text={paragraph} />}
				/>
			))}
		</div>
	);
});
