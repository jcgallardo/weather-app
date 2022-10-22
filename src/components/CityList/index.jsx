import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry;
    return (
        <li key={ city }>
            <CityInfo city={ city } country={ country }  />
            <Weather state='cloudy' temperature={ 10 }  />
        </li>
    )
}

const CityList = ({ cities }) => {
    return cities?.length && (
        <ul>
            {
                cities.map(renderCityAndCountry)
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired
}

export default CityList