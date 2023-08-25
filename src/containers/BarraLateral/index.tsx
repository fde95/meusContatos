import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCardContatos from '../../components/FiltroCardContatos'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostratFiltros: boolean
}

const BarraLateral = ({ mostratFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <>
      <S.Aside>
        {mostratFiltros ? (
          <>
            <i className="bi bi-search">
              <S.Buscar
                placeholder="Buscar ..."
                value={termo}
                onChange={(evento) =>
                  dispatch(alteraTermo(evento.target.value))
                }
              />
            </i>
            <FiltroCardContatos
              valor={enums.Categoria.FAMILIA}
              criterio="categoria"
              legenda="Familia"
            />
            <FiltroCardContatos
              valor={enums.Categoria.TRABALHO}
              criterio="categoria"
              legenda="Trabalho"
            />
            <FiltroCardContatos
              valor={enums.Categoria.AMIGOS}
              criterio="categoria"
              legenda="Amigos"
            />
            <FiltroCardContatos criterio="todos" legenda="Todos" />
          </>
        ) : (
          <S.BotaoRetornar onClick={() => navigate('/')}>
            Cancelar
          </S.BotaoRetornar>
        )}
      </S.Aside>
    </>
  )
}

export default BarraLateral
