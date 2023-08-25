import styled from 'styled-components'

export const Grid = styled.ul`
  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 50px;
  @media (max-width: 767px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }
  @media (min-width: 1025px) and (max-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }
`

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 767px) {
    max-width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1700px) {
    max-width: 90%;
  }
`
