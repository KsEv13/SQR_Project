import React from 'react'
import { NavLink } from 'react-router-dom'
import authService from '../../services/auth.service'
import { HeaderStyled, LogoStyled, NavStyled } from './Header.styled'

function Header() {
  const handleLogout = () => {
    authService.logout()
  }

  return (
    <HeaderStyled>
      <LogoStyled>Cake Bakery</LogoStyled>
      <NavStyled>
        {!authService.isAuthorized() ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <NavLink to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        )}
      </NavStyled>
    </HeaderStyled>
  )
}

export default Header
