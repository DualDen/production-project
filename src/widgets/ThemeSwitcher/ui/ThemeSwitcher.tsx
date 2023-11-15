import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider/theme/useTheme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface IThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { t } = useTranslation()
  const { toggleTheme } = useTheme()
  return (
      <Button className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])} onClick={toggleTheme}>{t('themeSwitch')}</Button>
  )
}
