import { useSelector } from 'react-redux'

import Contato from '../../components/Contatos'
import * as S from './styles'
import { Main, Titulo, Resultado } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.categoria === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Main>
      <S.Container>
        <Titulo>Lista de Contatos</Titulo>
        <Resultado>
          Resultado para: <i> &quot;{termo}&ldquo;</i>
        </Resultado>
        <S.Grid>
          {filtraTarefas().map((c) => (
            <li key={c.nome}>
              <Contato
                nome={c.nome}
                categoria={c.categoria}
                email={c.email}
                tel={c.tel}
                id={c.id}
              />
            </li>
          ))}
        </S.Grid>
      </S.Container>
    </Main>
  )
}
export default ListaDeContatos
