import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Main = styled.main`
  background-color: ${variaveis.fundoTelaTarefas};
  color: ${variaveis.branco};
  padding: 30px 0;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-size: 32px;
`

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
