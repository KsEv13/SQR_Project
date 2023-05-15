import React from 'react'
import Header from '../Header/Header'
import { LayoutStyled } from './Layout.styled'

function Layout({ children }) {
  return (
    <LayoutStyled>
      <Header />
      {children}
    </LayoutStyled>
  )
}

export default Layout
