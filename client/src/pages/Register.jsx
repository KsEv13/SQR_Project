import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import authService from '../services/auth.service'
import Layout from '../components/Layout/Layout'

function Register() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    authService
      .register(login, password)
      .then(() => {
        authService
          .login(login, password)
          .then(() => {
            history.push('/home')
          })
          .catch((error) => {
            setError(error.message)
          })
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <Layout>
      <LoginForm onSubmit={onSubmit} buttonText="Register" title="Create account" error={error} />
    </Layout>
  )
}

export default Register
