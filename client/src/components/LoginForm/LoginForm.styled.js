import styled from 'styled-components'
import { baseTheme } from '../../theme.tsx'

export const LoginFormStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 256px;
  margin: 20vh 0 20vh;
  #login,
  #password {
    border: 1px solid ${baseTheme.colors.MainColor};
    border-radius: 3px;
  }
  .submit {
    background-color: ${baseTheme.colors.MainColor};
    border: 2px solid ${baseTheme.colors.LightShades};
    border-radius: 3px;
  }
`
