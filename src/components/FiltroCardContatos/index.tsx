import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria' | 'todos'
  valor?: enums.Categoria
}

const FiltroCardContatos = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'categoria') {
      return contatos.itens.filter((item) => item.categoria === valor).length
    }
  }

  const contador = contarTarefas()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()

  return (
    <>
      <S.Card ativo={ativo} onClick={filtrar}>
        <S.Titulo>{legenda}</S.Titulo>
        <S.Contador>{contador}</S.Contador>
      </S.Card>
    </>
  )
}

export default FiltroCardContatos
