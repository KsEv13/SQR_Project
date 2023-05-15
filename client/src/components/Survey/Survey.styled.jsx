import styled from 'styled-components'
import { baseTheme } from '../../theme.tsx'

export const SurveyStyled = styled.div`
  margin-top: 22vh;
  .formcarry-block {
    display: flex;
    flex-direction: column;
  }
  #feedback,
  #filling,
  #biscuit,
  #telegram {
    border: 1px solid ${baseTheme.colors.MainColor};
    border-radius: 3px;
    margin: 5px;
  }
  .submit {
    background-color: ${baseTheme.colors.MainColor};
    border: 2px solid ${baseTheme.colors.LightShades};
    border-radius: 3px;
    margin: 0px auto 20px;
    width: 100px;
    height: 40px;
  }
`
