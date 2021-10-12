import React from 'react'
import './App.scss'
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
