import { memo } from "react";
import { Code, CodeDeprecated } from "@/shared/ui";
import { ArticleCodeBlock } from "../../model/types/article";
import { ToggleFeaturesWrapper } from "@/shared/lib";

interface Props {
	content: ArticleCodeBlock;
}

export const ArticleBlockCode = memo(({ content }: Props): JSX.Element => {
	return (
		<ToggleFeaturesWrapper
			featureName="isAppRedesigned"
			on={<Code text={content.code} className="block-margin" />}
			off={<CodeDeprecated text={content.code} className="block-margin" />}
		/>
	);
});
