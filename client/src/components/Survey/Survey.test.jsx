import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Survey from './Survey'

describe('Survey', () => {
  it('renders Survey component', async () => {
    await waitFor(() => render(<Survey />))
    expect(screen.queryByText(/Telegram/)).toBeVisible
    expect(screen.queryByText(/Which biscuit do you prefer/)).toBeVisible
    expect(screen.queryByText(/Which filling do you prefer/)).toBeVisible
    expect(screen.queryByText(/Additional comments/)).toBeVisible
    expect(screen.queryByText(/Send/)).toBeVisible
    expect(screen.queryByLabelText('feedback')).toBe(true)
  })
})
