import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface ILangSwitcherProps {
  className?: string
}
export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then()
  }
  return (
      <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggleLang}>{t('langSwitch')}</Button>
  )
}
