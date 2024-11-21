import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container } from './style'
import { RootReducer } from '../../store'

const ListaDeTarefa = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefa)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (itens) => itens.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 tarefas marcadas como &apos;categoria&apos; e &apos;{termo}&apos;</p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefa
