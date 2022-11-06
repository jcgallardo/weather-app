import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList'
import { getCities } from '../utils/serviceCities'


const MainPage = props => {
  const history = useHistory()

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`)
  }

  const cities = getCities();

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