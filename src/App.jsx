
import { Provider } from 'react-redux'
import './App.css'
import Todo from './components/Todo'
import store from './Redux/Store/store'
import List from './components/List'


function App() {


  return (
    
      <Provider store={store}>
        <Todo/>
        <List/>
      </Provider>
      
    
  )
}

export default App
