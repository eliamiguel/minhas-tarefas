import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloBlobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro/index'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloBlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
