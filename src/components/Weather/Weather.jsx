import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import IconState from '../IconState';

const Weather = ({ state, temperature }) => {
  return (
    <Grid container item direction='row' justifyContent='center' alignItems='center' spacing={1}>
      <IconState state={ state } contextOptions={{ size: '6em' }}  />
      <Typography display='inline' variant='h2'>{ temperature }</Typography> 
    </Grid>
  )
}

Weather.propTypes = {
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Weather