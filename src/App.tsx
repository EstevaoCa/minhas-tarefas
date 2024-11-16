import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefa from './containers/ListaDeTarefa'
import EstiloGlobal from './styles'
import { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </Provider>
  )
}

export default App
