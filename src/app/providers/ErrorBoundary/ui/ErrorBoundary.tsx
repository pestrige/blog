import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorComponent } from "widgets";

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// eslint-disable-next-line no-console
		console.error("ErrorBoundary: ", error, "errorInfo: ", errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;

		if (hasError) {
			return <ErrorComponent />;
		}

		return children;
	}
}

export default ErrorBoundary;
