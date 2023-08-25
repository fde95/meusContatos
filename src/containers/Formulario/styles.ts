import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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
export const Form = styled.form`
  max-width: 800px;
  width: 100%;
  padding: 24px 32px;
  margin: 0 auto;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 24px;
  padding: 4px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${variaveis.textoSecundario};
  color: ${variaveis.textoSecundario};
  font-size: 18px;
  transition: 0.4s ease;
  &:focus-visible {
    outline: none;
    border-bottom: 2px solid ${variaveis.branco};
    color: ${variaveis.branco};
    transition: 0.9s ease;
  }
`
export const Opcoes = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${variaveis.branco};

  p {
    margin-bottom: 8px;
    font-size: 18px;
  }

  label {
    margin-right: 20px;
  }
`
export const Cadastrar = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  background-color: ${variaveis.fundoVerde};
  border-radius: 8px;
  text-align: center;
  color: ${variaveis.branco};
  text-decoration: none;
  border: none;
  transition: 0.9s ease;
  &:hover {
    transition: 0.4s ease;
    background-color: ${variaveis.verde};
    box-shadow: 0 0 30px rgba(0, 200, 0, 0.6);
  }
`
export const Opcao = styled.div`
  display: inline;
`
