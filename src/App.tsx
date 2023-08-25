import { Provider } from 'react-redux'

import store from './store'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
