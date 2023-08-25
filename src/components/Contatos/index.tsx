import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  categoria,
  tel: telOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [tel, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telOriginal.length > 0) {
      setTelefone(telOriginal)
    }
  }, [telOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telOriginal)
  }

  const enviarEmail = `mailto:${email}`
  const ligarContato = `tel:+55${tel}`
  return (
    <>
      <S.Card>
        {estaEditando ? <em>Editando...</em> : ''}
        <S.Container>
          <S.NomeContato>{nome}</S.NomeContato>
          {estaEditando ? (
            ''
          ) : (
            <S.BotaoEdit onClick={() => setEstaEditando(true)} title="Editar">
              <i className="bi bi-pencil-square"></i>
            </S.BotaoEdit>
          )}
        </S.Container>

        <S.Tag>{categoria}</S.Tag>

        <S.ContainerSpace>
          <S.Input
            type="number"
            disabled={!estaEditando}
            placeholder="Digite seu número de telefone"
            value={tel}
            onChange={(evento) => setTelefone(evento.target.value)}
          />
          {estaEditando ? (
            ''
          ) : (
            <>
              <S.LinkLigar href={ligarContato} title="Ligar">
                <i className="bi bi-telephone"></i>
              </S.LinkLigar>
            </>
          )}
        </S.ContainerSpace>

        <S.ContainerSpace>
          <S.Input
            disabled={!estaEditando}
            type="email"
            value={email}
            placeholder="Digite seu melhor e-mail"
            onChange={(evento) => setEmail(evento.target.value)}
          />
          {estaEditando ? (
            ''
          ) : (
            <>
              <S.LinkEmail href={enviarEmail} title="Enviar e-mail">
                <i className="bi bi-envelope"></i>
              </S.LinkEmail>
            </>
          )}
        </S.ContainerSpace>

        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.BotaoCheck
                title="Salvar"
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      categoria,
                      tel,
                      email,
                      id
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                <i className="bi bi-check-lg"></i>
              </S.BotaoCheck>
              <S.BotaoExcluir title="Cancelar" onClick={cancelarEdicao}>
                <i className="bi bi-x-lg"></i>
              </S.BotaoExcluir>
            </>
          ) : (
            <>
              <S.BotaoExcluir
                title="Excluir"
                onClick={() => dispatch(remover(id))}
              >
                <i className="bi bi-trash-fill"></i>
              </S.BotaoExcluir>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>
    </>
  )
}

export default Contato
