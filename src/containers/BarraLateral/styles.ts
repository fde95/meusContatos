import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.fundoBarraLateral};
  height: 100vh;
  border-right: 5px solid ${variaveis.fundoCardBarraLateral};
  color: ${variaveis.branco};
  i {
    display: flex;
    align-items: center;
    color: ${variaveis.textoSecundario};
    margin: 30px 0 40px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    height: 100%;
    width: 100vw;

    i {
      justify-content: start;
    }
  }
`

export const Buscar = styled.input`
  color: ${variaveis.textoSecundario};
  background-color: transparent;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  width: 100%;
  border-bottom: 2px solid transparent;
  transition: 0.5s ease;
  &:focus-visible {
    outline: none;
    border-bottom: 2px solid ${variaveis.branco};
    color: ${variaveis.branco};
    transition: 0.9s ease;
  }
`
