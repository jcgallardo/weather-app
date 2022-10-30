import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { Grid, List, ListItem } from '@material-ui/core'

// Currying (Purificación) - función que devuelve otra función
const renderCityAndCountry = onClickCity => (cityAndCountry, weather) => {
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
                    {
                        weather
                            ? <Weather state={ weather.state } temperature={ weather.temperature.toFixed(0) }  />
                            : "No hay datos"
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({});

    useEffect(()=>{
        const setWeather = (city, country, countryCode) => 
            axios.get(
                process.env.REACT_APP_WEATHER_URL
                    .replace('{city}', city)
                    .replace('{countryCode}', countryCode)
            )
            .then(response => {
                const { data: { main: { temp } } } = response;
                const propName = `${city}-${country}`;
                const temperature = temp - 273; // La respuesta da la temperatura en grados Kelvin
                const state = 'sunny';
                const propValue = { temperature, state } 

                // ¡NOTA!: Para asegurar que estamos cogiendo el estado anterior, es necesario indicar una función al setter.
                // De la siguiente manera no obtendríamos el estado anterior en cada iteracción.
                // setAllWeather({
                //     ...allWeather,
                //     [propName]: propValue
                // })

                // De la siguiente manera nos asguramos que allWeather contiene la información actualizada
                setAllWeather(allWeather => ({
                    ...allWeather,
                    [propName]: propValue
                }));
            });
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode);
        });
    }, [cities])

    return cities?.length ? (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(
                    cityAndCountry,
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
                ))
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