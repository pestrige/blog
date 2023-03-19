import { memo } from "react";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleBlockCode } from "../ArticleBlockCode/ArticleBlockCode";
import { ArticleBlockImage } from "../ArticleBlockImage/ArticleBlockImage";
import { ArticleBlockText } from "../ArticleBlockText/ArticleBlockText";

interface Props {
	block: ArticleBlock;
}

export const ArticleContent = memo(({ block }: Props): JSX.Element => {
	switch (block.type) {
		case ArticleBlockType.CODE:
			return <ArticleBlockCode content={block} />;
		case ArticleBlockType.IMAGE:
			return <ArticleBlockImage content={block} />;
		case ArticleBlockType.TEXT:
			return <ArticleBlockText content={block} />;
		default:
			return <div />;
	}
});
