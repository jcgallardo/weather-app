import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import IconState from '../IconState';

const Weather = ({ state, temperature }) => {
  return (
    <>
      <IconState state={ state } contextOptions={{ size: '5em' }}  />
      <Typography display='inline' variant='h2'>{ temperature }</Typography> 
    </>
  )
}

Weather.propTypes = {
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default Weather