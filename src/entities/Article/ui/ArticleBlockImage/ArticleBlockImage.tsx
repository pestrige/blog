import { memo } from "react";
import { TextDeprecated } from "@/shared/ui";
import { ArticleImageBlock } from "../../model/types/article";
import cls from "./ArticleBlockImage.module.scss";

interface Props {
	content: ArticleImageBlock;
}

export const ArticleBlockImage = memo(({ content }: Props): JSX.Element => {
	return (
		<div className="block-margin">
			<img className={cls.image} src={content.src} alt={content.title} />
			{!!content.title && <TextDeprecated text={content.title} align="center" />}
		</div>
	);
});
