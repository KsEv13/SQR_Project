import styled from 'styled-components'
import { baseTheme } from '../../theme.tsx'

export const HeaderStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  padding: 10px;
  color: ${baseTheme.colors.DarkShades};
  box-sizing: border-box;
`

export const LogoStyled = styled.h2`
  margin-left: 40px;
`

export const NavStyled = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin-right: 40px;
  a {
    text-decoration: none;
    color: ${baseTheme.colors.LightShades};
    height: 40px;
    width: 100px;
    border-radius: 3px;
    text-align: center;
    padding-top: calc((46px - 1em) / 2);
  }
  a:hover {
    box-shadow: 0 0 4px 2px ${baseTheme.colors.LightShades};
    color: ${baseTheme.colors.LightShades};
  }
`

export const BlobStyled = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  z-index: -1;
  top: -40px;
  right: 80px;
  border-bottom-right-radius: 70% 60%;
  border-bottom-left-radius: 30% 40%;
  border-top-left-radius: 30% 60%;
  border-top-right-radius: 70% 40%;
  background-color: ${baseTheme.colors.WhiteColor};
  background-image: linear-gradient(19deg, ${baseTheme.colors.LightShades} 0%, ${baseTheme.colors.MainColor} 100%);
`
