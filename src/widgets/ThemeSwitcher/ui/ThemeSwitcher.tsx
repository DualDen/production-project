import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider/theme/useTheme";
import React from "react";

interface IThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className} : IThemeSwitcherProps) => {
    const {toggleTheme} = useTheme();
    return (
        <button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>Change theme</button>
    );
};
