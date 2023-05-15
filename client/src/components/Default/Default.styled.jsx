import styled from 'styled-components'
import { baseTheme } from '../../theme.tsx'

export const DefaultStyled = styled.div`
  display: flex;
  width: 40%;
  margin: 40vh 0 10vh;
  padding: 40px;
  background-color: ${baseTheme.colors.MainColor};
  opacity: 0.8;
  box-shadow: 0px 0px 5px 3px ${baseTheme.colors.DarkShades};
  color: ${baseTheme.colors.LightShades};
  justify-content: center;
  align-items: center;
  text-align: center;
`
