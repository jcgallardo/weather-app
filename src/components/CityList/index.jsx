import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const CityList = ({ cities }) => {
  return (
    <ul>
        {
            cities.map(({ city, country }) => 
                <li>
                    <CityInfo city={ city } country={ country }  />
                    <Weather temperature={10} state='sunny' />
                </li>
            )
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }).isRequired
}

export default CityList