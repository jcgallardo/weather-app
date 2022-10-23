import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { Grid, List, ListItem } from '@material-ui/core'

// Currying (Purificación) - función que devuelve otra función
const renderCityAndCountry = onClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry;
    return (
        <ListItem
            key={ city }
            onClick={ onClickCity }
            button
        >
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={9} xs={12}>
                    <CityInfo city={ city } country={ country }  />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather state='cloudy' temperature={ 10 }  />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return cities?.length ? (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    ) : null;
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func
}

export default CityList