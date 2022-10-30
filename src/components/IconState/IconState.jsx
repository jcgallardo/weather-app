import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons';
import { 
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiRaindrop,
    WiSnow,
    WiThunderstorm
  } from 'react-icons/wi';


const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
};
  
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

