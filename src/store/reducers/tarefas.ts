import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefas'
import * as enuns from '../../Utils/enums/Tarefa'

type TarefaSlice = {
  itens: Tarefa[]
}
const initialState: TarefaSlice = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript',
      prioridade: enuns.Prioridade.IMPORTATE,
      status: enuns.Status.CONCLUIDA,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar TypeScript',
      prioridade: enuns.Prioridade.NORMAL,
      status: enuns.Status.PENDENTES,
      titulo: 'Revisao'
    },
    {
      id: 3,
      descricao: 'Estudar React',
      prioridade: enuns.Prioridade.URGENTE,
      status: enuns.Status.CONCLUIDA,
      titulo: 'Fazer a aula'
    }
  ]
}
const TarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    }
  }
})

export const { remover } = TarefaSlice.actions
export default TarefaSlice.reducer
