import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Survey from '../components/Survey/Survey'
import Default from '../components/Default/Default'
import authService from '../services/auth.service'

function Home() {
  const [user, setUsers] = useState('Nothing')
  const [error] = useState()
  const [loading] = useState()

  useEffect(() => {
    if (authService.isAuthorized()) {
      setUsers('Success')
    } else {
      setUsers('Error')
    }
  }, [])

  return (
    <Layout>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user === 'Success' ? <Survey /> : <Default />}
    </Layout>
  )
}

export default Home
