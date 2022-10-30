import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import IconState from '../IconState';

const Weather = ({ state, temperature }) => {
  return (
    <Grid container item direction='row' justifyContent='center' alignItems='center' spacing={1}>
      <IconState state={ state } contextOptions={{ size: '6em' }}  />
      {
        temperature 
          ? <Typography display='inline' variant='h2'>{ temperature }</Typography> 
          : <Skeleton variant="rect" animation="wave" height={96} width={96} />
      }
    </Grid>
  )
}

Weather.propTypes = {
  state: PropTypes.string,
  temperature: PropTypes.number
}

export default Weather