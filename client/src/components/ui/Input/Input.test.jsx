import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders Input Login component', async () => {
    render(
      <Input
        name="login"
        id="login"
        label="Login"
        rules={{ required: { message: 'Login is required', value: true } }}
      />
    )

    expect(screen.queryByText(/Login/)).toBeVisible
  })
  it('renders Input Password component', async () => {
    render(
      <Input
        label="Password"
        name="password"
        rules={{
          required: { message: 'Password is required', value: true },
          minLength: { message: 'Password must be at least 8 characters', value: 8 }
        }}
        id="password"
      />
    )
    expect(screen.queryByText(/Password/)).toBeVisible
  })
})
