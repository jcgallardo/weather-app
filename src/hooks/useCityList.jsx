import { useEffect, useState } from "react";
import axios from 'axios'
import convertUnits from 'convert-units'
import { getCityCode } from "../utils/utils";
import { getWeatherUrl } from "../utils/urls";

/**
 * HOOK cityList
 */
 const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);

    useEffect(()=>{
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl(city, countryCode);

            try {
                const response = await axios.get(url)    
                const {
                    data: { 
                        main: { temp },
                        weather
                    }
                } = response;

                const propName = getCityCode(city, countryCode);
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
            } catch (error) {
                if (error.response) { // Errores que nos response el server
                    setError("Ha ocurrido un error en el servidor del clima");
                } else if (error.request) { // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet");
                } else {
                    setError("Ha ocurrido un error inesperado");
                }
            }
        }

        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, countryCode);
        });

    }, [cities])

    return {
        allWeather,
        error,
        setError
    };
}

export default useCityList;