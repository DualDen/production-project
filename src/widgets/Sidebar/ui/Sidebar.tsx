import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface ISidebarProps {
  className?: string
}
export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }
  return (
      <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <button data-testid='sidebar-toggle' onClick={toggleCollapsed}>Toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher/>
          </div>
      </div>
  )
}
