import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = props => {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/city">
            <CityPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App