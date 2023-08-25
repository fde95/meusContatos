import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  @media (max-width: 767px) {
    display: block;
  }
`
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
export const Resultado = styled.span`
  color: ${variaveis.textoSecundario};
`
export const Legenda = styled(Resultado)`
  font-size: 10px;
`

export default EstiloGlobal
