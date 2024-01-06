import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'themeSwitch' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button'
  }
}

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}
export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINED
  }
}
