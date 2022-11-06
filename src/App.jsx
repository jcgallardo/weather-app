import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ WelcomePage } />
        <Route path="/main" component={ MainPage } />
        <Route path="/city/:countryCode/:city" component={ CityPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
  )
}

export default App