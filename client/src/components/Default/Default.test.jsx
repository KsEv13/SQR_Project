import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Default from './Default'

describe('Default', () => {
  it('renders Default component', async () => {
    await waitFor(() => render(<Default />))
    expect(
      screen.queryByText(
        /On this website you can fill a form to order a cake. To proceed, please, register and log in./
      )
    ).toBeVisible
  })
})
