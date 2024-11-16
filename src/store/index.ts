import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefa: tarefaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
