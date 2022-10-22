import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from '../ForecastItem'
import { Grid } from '@material-ui/core'

const renderForecastItem = (forecast) => {
    const {weekDay, hour, state, temperature} = forecast
    return (
        <Grid item key={`${weekDay}-${hour}`}>
            <ForecastItem
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            />
        </Grid>
    )
}

const Forecast = ({
    forecastItemList
}) => {
  return (
    <Grid container
        justifyContent='center'
        alignItems='center'
    >
        {
            forecastItemList.map(forecastItem => renderForecastItem(forecastItem))
        }
    </Grid>
  )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape(ForecastItem.propTypes)).isRequired
}

export default Forecast