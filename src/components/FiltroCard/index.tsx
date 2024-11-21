import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { alterarFiltro } from '../../store/reducers/filtros'
import * as enums from '../../Utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefa } = useSelector((state: RootReducer) => state)

  const vereficaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefa.itens.length
    if (criterio === 'prioridade') {
      return tarefa.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefa.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = vereficaEstaAtivo()
  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador> {contador} </S.Contador>
      <S.Label> {legenda} </S.Label>
    </S.Card>
  )
}

export default FiltroCard
