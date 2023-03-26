import { memo } from "react";
import { Text } from "shared/ui";
import { classNames } from "shared/lib";
import { ArticleTextBlock } from "../../model/types/article";

interface Props {
	content: ArticleTextBlock;
	className?: string;
}

export const ArticleBlockText = memo(({ content, className = "" }: Props): JSX.Element => {
	return (
		<div className={classNames("block-margin", className)}>
			{!!content.title && <Text className="block-margin" title={content.title} />}

			{content.paragraphs.map((paragraph) => (
				<Text key={paragraph} className="block-margin" text={paragraph} />
			))}
		</div>
	);
});
