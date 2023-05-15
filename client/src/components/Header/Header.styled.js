import styled from 'styled-components'
import { baseTheme } from '../../theme.tsx'

export const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 10px;
  color: ${baseTheme.colors.DarkShades};
  background-color: rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  z-index: 1000;
  @media (max-width: 769px) {
    h2 {
      font-size: 28px;
    }
  }
  @media (max-width: 720px) {
    h2 {
      font-size: 26px;
    }
  }
  @media (max-width: 620px) {
    h2 {
      font-size: 24px;
    }
  }
  @media (max-width: 571px) {
    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 510px) {
    h2 {
      font-size: 20px;
    }
  }
`

export const LogoStyled = styled.h2`
  margin-left: 40px;
  font-size: 30px;
`

export const NavStyled = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin-right: 40px;
  a {
    text-decoration: none;
    color: ${baseTheme.colors.DarkShades};
    height: 40px;
    width: 110px;
    border-radius: 3px;
    text-align: center;
    padding-top: calc((46px - 1em) / 2);
    font-size: 22px;
  }
  a:hover {
    box-shadow: 0 0 4px 2px ${baseTheme.colors.LightShades};
    color: ${baseTheme.colors.LightShades};
  }

  @media (max-width: 769px) {
    a {
      font-size: 20px;
      width: 90px;
    }
  }

  @media (max-width: 720px) {
    a {
      font-size: 18px;
      width: 85px;
      height: 30px;
    }
  }

  @media (max-width: 620px) {
    a {
      width: 80px;
    }
  }

  @media (max-width: 571px) {
    a {
      width: 70px;
      font-size: 16px;
    }
  }

  @media (max-width: 510px) {
    a {
      width: 60px;
      height: 25px;
      font-size: 14px;
    }
  }
`
