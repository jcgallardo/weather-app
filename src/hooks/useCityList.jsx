import { useEffect, useState } from "react";
import axios from 'axios'
import { getWeatherUrl } from "../utils/urls";
import getAllWeather from "../utils/transform/getAllWeather";

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
                const allWeatherAux = getAllWeather(response, city, countryCode);
                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }));
                
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