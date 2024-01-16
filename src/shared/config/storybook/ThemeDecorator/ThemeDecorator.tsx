import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider/theme/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
      <div className={`app ${theme}`}>
          <StoryComponent/>
      </div>
  )
}
