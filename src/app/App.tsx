import { AppRouter, useTheme } from "app/providers";
import { classNames } from "shared/lib";
import { Navbar } from "widgets";

import "./styles/index.scss";

export const App = ({}): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
	 <div className={classNames("app", theme)}>
		 <Navbar />
		 <button onClick={toggleTheme}>TOGGLE THEME</button>
		 <AppRouter/>
	 </div>
	);
};
