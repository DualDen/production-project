import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link } from 'react-router-dom'
import { type ReactNode } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps {
  className?: string
  to: string
  children: ReactNode
  theme?: AppLinkTheme
}

export const AppLink = ({ className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps }: IAppLinkProps) => {
  return (
      <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
          {children}
      </Link>
  )
}
