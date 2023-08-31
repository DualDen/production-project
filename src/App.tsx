import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import "./index.scss"
import {AboutPageAsync} from "./pages/AboutPAge/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import ThemeProvider from "./theme/ThemeProvider";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme,toggleTheme} = useTheme();
    return (
            <div className={classNames('app', {}, [theme])}>
                <Link to='/about'>ABOUT</Link>
                <Link to='/'>MAIN</Link>
                <button onClick={toggleTheme}>Change theme</button>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/about' element={<AboutPageAsync/>}/>
                        <Route path='/' element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
    );
};

export default App;