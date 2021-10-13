import React from 'react'
import './App.scss'
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Pages/Home'
import Lista from './Pages/Listas'
import Header from './Components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/lista' component={Lista} />
      </Switch>
    </Router>
  )
}

export default App
