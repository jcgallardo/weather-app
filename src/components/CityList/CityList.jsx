import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { Grid, List, ListItem } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

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
                    <Weather state={ weather?.state } temperature={ weather?.temperature }  />
                </Grid>
            </Grid>
        </ListItem>
    )
};

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(()=>{
        const setWeather = (city, country, countryCode) => 
            axios.get(
                process.env.REACT_APP_WEATHER_URL
                    .replace('{city}', city)
                    .replace('{countryCode}', countryCode)
            )
            .then(response => {
                const { data: { 
                    main: { temp },
                    weather
                } } = response;
                const propName = `${city}-${country}`;
                const temperature = Number(convertUnits(temp).from('K').to('C').toFixed(0));
                const propValue = { 
                    temperature,
                    state: weather[0]?.main?.toLowerCase()
                };

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
            })
            .catch(error => {
                if (error.response) { // Errores que nos response el server
                    setError("Ha ocurrido un error en el servidor del clima");
                } else if (error.request) { // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet");
                } else {
                    setError("Ha ocurrido un error inesperado");
                }
            });
        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode);
        });
    }, [cities])

    return  (
        <div>
            {
                error && <Alert severity='error' onClose={ () => setError(null) }>{ error }</Alert>
            }
            {
                <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(
                        cityAndCountry,
                        allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
                    ))
                }
                </List>
            }
        </div>
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