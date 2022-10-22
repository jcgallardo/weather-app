import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import IconState from '../IconState'

const ForecastItem = ({
    weekDay, hour, state, temperature
}) => {
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Grid item>
            <Typography>{ weekDay }</Typography>
        </Grid>
        <Grid item>
            <Typography>{ hour } </Typography>
        </Grid>
        <Grid item>
            <IconState state={ state } contextOptions={{ size: '5em' }} />
        </Grid>
        <Grid item>
            <Typography>{ temperature }°</Typography>
        </Grid>
    </Grid>
  )
}

ForecastItem.propTypes = {
    hour: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weekDay: PropTypes.string.isRequired
}

export default ForecastItem