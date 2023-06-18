export interface RatingCardBaseProps {
	className?: string;
	title: string;
	feedbackTitle?: string;
	rating?: number;
	testId?: string;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
}

export interface RatingCardExtendedProps
	extends Pick<RatingCardBaseProps, "className" | "title" | "feedbackTitle" | "testId"> {
	isModalOpen: boolean;
	feedback: string;
	selectedStars: number;
	onSelectStars: (selectedRating: number) => void;
	onInput: (value: string) => void;
	onModalClose: () => void;
	onCancel: () => void;
	onAccept: () => void;
}
