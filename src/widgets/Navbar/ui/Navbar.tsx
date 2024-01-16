import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
interface INavbarProps {
  className?: string
}
export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation('navbar')
  return (
      <div className={classNames(cls.Navbar, {}, [className ?? ''])}>
          <div className={classNames(cls.links)}>
              <AppLink to={'/'} className={cls.mainLink}>{t('main')}</AppLink>
              <AppLink to={'/about'}>{t('about')}</AppLink>
          </div>
      </div>
  )
}
