import { AppRouter, useTheme } from "app/providers";
import { classNames } from "shared/lib";
import { Navbar, Sidebar } from "widgets";

import "./styles/index.scss";

export const App = ({}): JSX.Element => {
	const { theme } = useTheme();

	return (
	 <div className={classNames("app", theme)}>
		 <Navbar/>
		 <div className="content">
			 <Sidebar/>
			 <AppRouter/>
		 </div>
	 </div>
	);
};
