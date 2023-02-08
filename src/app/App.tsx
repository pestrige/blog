import React from 'react';
import { Link } from "react-router-dom";
import { AppRouter, useTheme } from "app/providers";
import { classNames } from "shared/lib";

import "./styles/index.scss";

export const App = ({}): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
	 <div className={classNames("app", theme)}>
		 <button onClick={toggleTheme}>TOGGLE THEME</button>
		 <Link to="/">Главная</Link>
		 <Link to="/about">О сайте</Link>

		 <AppRouter/>
	 </div>
	);
};
