import { memo } from "react";
import { Text } from "shared/ui";
import { ArticleTextBlock } from "../../model/types/article";

interface Props {
	content: ArticleTextBlock;
}

export const ArticleBlockText = memo(({ content }: Props): JSX.Element => {
	return (
		<div className="block-margin">
			{!!content.title && <Text className="block-margin" title={content.title} />}

			{content.paragraphs.map((paragraph) => (
				<Text key={paragraph} className="block-margin" text={paragraph} />
			))}
		</div>
	);
});
