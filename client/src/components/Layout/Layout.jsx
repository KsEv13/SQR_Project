import React from 'react'
import Header from '../Header/Header'
import { LayoutStyled } from './Layout.styled'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
