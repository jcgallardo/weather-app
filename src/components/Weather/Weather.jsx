import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { 
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain
} from 'react-icons/wi';
import { IconContext } from 'react-icons';

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const Icon = ({state}) => {
  const Icon = stateByName[state];
  return <Icon />
}

const Weather = ({ state, temperature }) => {
  return (
    <>
      <IconContext.Provider value={ { size: '5em' } } >
        <Icon state={ state } />
      </IconContext.Provider>
      <Typography display='inline' variant='h2'>{ temperature }</Typography> 
    </>
  )
}

Weather.propTypes = {
  state: PropTypes.oneOf(Object.keys(stateByName)).isRequired,
  temperature: PropTypes.number.isRequired
}

export default Weather