import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/tarefas'

type Props = TarefaClass

const Tarefas = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo> {titulo} </S.Titulo>
      <S.Tag parematro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parematro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descriçao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
