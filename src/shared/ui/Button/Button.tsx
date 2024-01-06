import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import React from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
}
interface IButtonProps {
  className?: string
  children: React.ReactNode
  theme?: ThemeButton
  onClick: () => void
}
export const Button = ({ className, children, theme, ...otherProps }: IButtonProps) => {
  return (
      <div className={classNames(cls.Button, { [cls[theme ?? '']]: true }, [className ?? ''])} {...otherProps}>
          {children}
      </div>
  )
}
