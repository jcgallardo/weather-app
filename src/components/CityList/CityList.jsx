import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { Grid } from '@material-ui/core'

// Currying (Purificación) - función que devuelve otra función
const renderCityAndCountry = onClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry;
    return (
        <li key={ city } onClick={ onClickCity }>
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={8} xs={12}>
                    <CityInfo city={ city } country={ country }  />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather state='cloudy' temperature={ 10 }  />
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return cities?.length && (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func
}

export default CityList