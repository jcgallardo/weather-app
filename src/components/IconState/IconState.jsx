import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons';
import { 
    WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain
  } from 'react-icons/wi';


const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}
  
const IconState = ({ state, contextOptions }) => {
    const Icon = stateByName[state];
    return (
        <IconContext.Provider value={ contextOptions } >
            <Icon state={ state } />
        </IconContext.Provider>
    )
}

IconState.propTypes = {
    contextOptions: PropTypes.object,
    state: PropTypes.oneOf(Object.keys(stateByName)).isRequired,
}

IconState.defaultProps = {
    contextOptions: {
        size: '1em'
    }
}

export default IconState

