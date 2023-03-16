import styled from 'styled-components'
import blobBackground from '../../assets/blobs.png'

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

export const LayoutStyled = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0;
  width: ${windowInnerWidth};
  height: ${windowInnerHeight};
  align-items: center;
  background: url('${blobBackground}') no-repeat;
  background-size: 100%;
`
