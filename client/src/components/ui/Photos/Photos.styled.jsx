import styled from 'styled-components'

export const PhotosStyled = styled.div`
  .columnUl {
    width: 100%;
    list-style: none;
    padding: 8px;
    margin: 0;

    display: flex;
    flex-direction: column;
  }

  .li {
    margin-bottom: 12px;
  }

  .img {
    position: relative;
    margin-bottom: 4px;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  .credit {
    opacity: 0;
  }
`
