import type { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/theme/ThemeContext'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)]
  }
}

export default preview
