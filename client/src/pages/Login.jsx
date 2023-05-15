import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import authService from '../services/auth.service'
import Layout from '../components/Layout/Layout'

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    authService
      .login(login, password)
      .then(() => {
        history.push('/home')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <Layout>
      <LoginForm onSubmit={onSubmit} buttonText="Sign in" title="Sign into account" error={error} />
    </Layout>
  )
}

export default Login
