import { memo } from "react";
import { Code } from "shared/ui";
import { ArticleCodeBlock } from "../../model/types/article";

interface Props {
	content: ArticleCodeBlock;
}

export const ArticleBlockCode = memo(({ content }: Props): JSX.Element => {
	return <Code text={content.code} className="block-margin" />;
});
