import { useSelector } from 'react-redux'

import Contato from '../../components/Contatos'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
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
    <S.Main>
      <S.Container>
        <S.Titulo>Lista de Contatos</S.Titulo>
        <span>
          Resultado para: <i> &quot;{termo}&ldquo;</i>
        </span>
        <ul>
          <li>{termo}</li>
          <li>{criterio}</li>
          <li>{valor}</li>
        </ul>
        <S.Grid>
          {filtraTarefas().map((c) => (
            <li key={c.nomeContato}>
              <Contato
                nomeContato={c.nomeContato}
                categoria={c.categoria}
                email={c.email}
                tel={c.tel}
                id={c.id}
              />
            </li>
          ))}
        </S.Grid>
      </S.Container>
    </S.Main>
  )
}
export default ListaDeContatos
