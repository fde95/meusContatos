import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Main, Titulo, Legenda } from '../../styles/index'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [tel, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.AMIGOS)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        categoria,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <Main>
      <S.Container>
        <Titulo>Novo Contato</Titulo>
        <S.Form onSubmit={cadastrarContato}>
          <S.Input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome Completo"
          />
          <S.Input
            type="number"
            value={tel}
            onChange={(evento) => setTelefone(evento.target.value)}
            placeholder="Número de telefone (apenas número)"
          />
          <Legenda>Exemplo: 11912345678</Legenda>
          <S.Input
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="Seu melhor e-mail"
          />

          <S.Opcoes>
            <p>Categoria</p>
            {Object.values(enums.Categoria).map((categoria) => (
              <S.Opcao key={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                  type="radio"
                  id={categoria}
                />{' '}
                <label htmlFor={categoria}>{categoria}</label>
              </S.Opcao>
            ))}
          </S.Opcoes>
          <S.Cadastrar type="submit">Cadastrar</S.Cadastrar>
        </S.Form>
      </S.Container>
    </Main>
  )
}
export default Formulario
