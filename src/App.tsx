import React, { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import "./styles/index.scss";
import { useTheme } from "./theme";
import { classNames } from "./helpers";

export const App = ({}): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
	 <div className={classNames("app", theme)}>
		 <button onClick={toggleTheme}>TOGGLE THEME</button>
		 <Link to="/">Главная</Link>
		 <Link to="/about">О сайте</Link>

		 <Suspense fallback={<div>Loading...</div>}>
			 <Routes>
				 <Route path="/about" element={<AboutPageLazy/>}/>
				 <Route path="/" element={<MainPageLazy/>}/>
			 </Routes>
		 </Suspense>
	 </div>
	);
};
