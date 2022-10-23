import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { Grid } from '@material-ui/core'

const App = props => {
  return (
    <Grid container justifyContent='center' direction='row'>
      <Grid item
        xs={12}
        sm={11}
        md={10}
        lg={8}
      >
        <h1>App</h1>
        <Router>
          <Switch>
            <Route path="/" exact component={ WelcomePage } />
            <Route path="/main" component={ MainPage } />
            <Route path="/city" component={ CityPage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  )
}

export default App