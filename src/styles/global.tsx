import styled from 'styled-components'

export const ThumbnailGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 4vw;
  }
`
