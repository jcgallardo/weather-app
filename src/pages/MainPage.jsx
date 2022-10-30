import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList'


const MainPage = props => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/city')
  }

  const cities = [
    {
        city: 'Madrid',
        country: 'España',
        countryCode: 'ES'
    },
    {
        city: 'Puertollano',
        country: 'España',
        countryCode: 'ES'
    },
    {
        city: 'Priego de Córdoba',
        country: 'España',
        countryCode: 'ES'
    }
]

  return (
    <AppFrame>
      <Grid item>
        <Paper elevation={1}>
          <CityList cities={cities} onClickCity={ onClickHandler } />
        </Paper>
      </Grid>
    </AppFrame>
  )
}

MainPage.propTypes = {}

export default MainPage