import { describe } from 'jest-circus'
import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('test', () => {
  test('buttonTest', () => {
    render(<Button theme={ThemeButton.CLEAR} onClick={() => null}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
