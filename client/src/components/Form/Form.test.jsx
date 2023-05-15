import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Form from './Form'

test('integration test, Form', async () => {
  const USER = 'some-username'
  const PASS = 'some-pass'

  render(<Form />)

  const userInput = screen.getByLabelText(/login/)
  user.type(userInput, USER)
  const passwordInput = screen.getByLabelText(/password/)
  user.type(passwordInput, PASS)
  const submitButton = screen.getByText(/submit/)

  fireEvent.click(submitButton)
  expect(await screen.findByText(/login/)).toBeInTheDocument()
  expect(await screen.findByText(/password/)).toBeInTheDocument()
})
