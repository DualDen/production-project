import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface IPageErrorProps {
  className?: string
}
export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation('errorPage')
  const handleReload = () => {
    window.location.reload()
  }
  return (
      <div className={classNames(cls.PageError, {}, [className ?? ''])}>
          {t('error')}
          <Button onClick={handleReload}>
              {t('reloadPage')}
          </Button>
      </div>
  )
}
