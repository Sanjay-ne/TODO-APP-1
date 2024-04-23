
import { Provider } from 'react-redux'
import './App.css'
import store from './Store/Store'
import Todos from './Components/Todos'

function App() {


  return (
    <Provider store={store}>
      <h1>Redux-toolkit</h1>
      <Todos></Todos>
    </Provider>
  )
}

export default App
