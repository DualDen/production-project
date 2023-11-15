import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
      <div style={{ color: '#000' }}>
          {t('main')}
      </div>
  )
}

export default MainPage
