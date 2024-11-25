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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefasNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefasNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enuns.Status.CONCLUIDA
          : enuns.Status.PENDENTES
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = TarefaSlice.actions
export default TarefaSlice.reducer
