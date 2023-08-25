import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  opacity: 40%;
  transition: 0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 100%;
    transition: 0.9s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`
