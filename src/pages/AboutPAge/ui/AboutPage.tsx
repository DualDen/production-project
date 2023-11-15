import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
      <div style={{ color: '#000' }}>
          {t('about')}
      </div>
  )
}

export default AboutPage
