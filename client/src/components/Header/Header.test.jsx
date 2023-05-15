import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
  it('renders Header component', async () => {
    await waitFor(() =>
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    )
    expect(screen.queryByText(/Cake Bakery/)).toBeVisible
  })
  it('renders Register/Login links', async () => {
    await waitFor(() =>
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    )
    expect(screen.queryByText(/Login/)).toBeVisible
    expect(screen.queryByText(/Register/)).toBeVisible
  })
})
