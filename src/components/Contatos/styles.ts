import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  padding: 16px;
  background-color: ${variaveis.fundoBarraLateral};
  border-radius: 8px;
  max-width: 300px;
  width: 100%;
  transition: 0.9s ease;
  &:hover {
    transition: 0.3s ease;
    box-shadow: 0 0 40px rgba(26, 208, 255, 0.4);
  }
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerSpace = styled(Container)`
  margin-bottom: 16px;
  margin-top: 24px;
`
export const BarraAcoes = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: end;
`

export const NomeContato = styled.h3`
  font-size: 18px;
`
export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 4px;
  color: ${variaveis.azul};
  background-color: ${variaveis.fundoAzul};
`
export const Input = styled.input`
  width: 100%;
  padding: 4px;
  background-color: transparent;
  border: none;
  color: ${variaveis.textoSecundario};
  transition: 0.8s ease;
  border-bottom: 2px solid transparent;
  &:focus-visible {
    outline: none;
    border-bottom: 2px solid ${variaveis.branco};
    color: ${variaveis.branco};
    transition: 0.4s ease;
  }
`
export const Botao = styled.button`
  margin-left: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 40%;
  transition: 0.9s ease;
  &:hover {
    opacity: 100%;
    transition: 0.4s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`
export const BotaoEdit = styled(Botao)`
  color: ${variaveis.cinza};
  background-color: ${variaveis.fundoCinza};
`
export const BotaoExcluir = styled(Botao)`
  color: ${variaveis.vermelho};
  background-color: ${variaveis.fundoVermelho};
  margin: 0;
  font-size: 14px;
`
export const BotaoCheck = styled(Botao)`
  color: ${variaveis.verde};
  background-color: ${variaveis.fundoVerde};
  font-size: 14px;
  margin-right: 8px;
  opacity: 100%;
`

export const Link = styled.a`
  margin-left: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 40%;
  transition: 0.5s ease;
  text-decoration: none;
  &:hover {
    opacity: 100%;
    transition: 0.5s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`
export const LinkLigar = styled(Link)`
  color: ${variaveis.verde};
  background-color: ${variaveis.fundoVerde};
`
export const LinkEmail = styled(Link)`
  color: ${variaveis.laranja};
  background-color: ${variaveis.fundoLaranja};
`
