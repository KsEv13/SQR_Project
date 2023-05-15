import React from 'react'
import Form from '../Form/Form'
import Input from '../ui/Input/Input'
import { LoginFormStyled } from './LoginForm.styled'

function LoginForm({ onSubmit, title, buttonText, error }) {
  return (
    <LoginFormStyled>
      <h2>{title}</h2>
      <Form onSubmit={onSubmit} defaultValues={{ login: '', password: '' }}>
        <Input
          name="login"
          id="login"
          label="Login"
          rules={{ required: { message: 'Login is required', value: true } }}
        />
        <Input
          name="password"
          id="password"
          label="Password"
          type="password"
          rules={{
            required: { message: 'Password is required', value: true },
            minLength: { message: 'Password must be at least 8 characters', value: 8 }
          }}
        />
        <div>{error && <p>{error}</p>}</div>
        <button className="submit" type="submit">
          {buttonText}
        </button>
      </Form>
    </LoginFormStyled>
  )
}

export default LoginForm
