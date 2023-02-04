import React, { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";

import { AboutPage, MainPage } from "pages";
import { useTheme } from "app/providers";
import { classNames } from "shared/lib";

import "./styles/index.scss";

export const App = ({}): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
	 <div className={classNames("app", theme)}>
		 <button onClick={toggleTheme}>TOGGLE THEME</button>
		 <Link to="/">Главная</Link>
		 <Link to="/about">О сайте</Link>

		 <Suspense fallback={<div>Loading...</div>}>
			 <Routes>
				 <Route path="/about" element={<AboutPage/>}/>
				 <Route path="/" element={<MainPage/>}/>
			 </Routes>
		 </Suspense>
	 </div>
	);
};
