import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { WiCloud } from 'react-icons/wi';

const Weather = ({ temperature }) => {
  return (
    <>
      <WiCloud />
      <Typography display='inline' variant='h2'>{ temperature }</Typography> 
    </>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather