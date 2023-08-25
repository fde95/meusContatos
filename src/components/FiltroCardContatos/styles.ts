import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  background-color: ${variaveis.fundoCardBarraLateral};
  border-radius: 8px;
  margin: 16px 0;
  border: 2px solid
    ${(props) => (props.ativo ? `${variaveis.azul}` : 'transparent')};
  transition: 0.3s ease;
  box-shadow: ${(props) =>
    props.ativo ? '0 0 30px rgba(26, 208, 255, 0.4)' : 'none'};
  @media (max-width: 767px) {
    max-width: 130px;
    width: 100%;
    padding: 8px 14px;
  }
`
export const Titulo = styled.h3`
  font-weight: 400;
`

export const Contador = styled.span`
  padding: 2px 6px;
  font-weight: bold;
  border-radius: 4px;
  background-color: ${variaveis.fundoAzul};
  color: ${variaveis.azul};
`
