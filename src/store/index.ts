import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    tarefa: tarefaReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
