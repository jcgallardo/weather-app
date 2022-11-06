import { getCityCode, toCelsius } from "../utils";

const getAllWeather = (response, city, countryCode) => {
    const {
        data: { 
            main: { temp },
            weather
        }
    } = response;

    const propName = getCityCode(city, countryCode);
    const temperature = toCelsius(temp);
    const propValue = { 
        temperature,
        state: weather[0]?.main?.toLowerCase()
    };

    return {
        [propName]: propValue
    };
}

export default getAllWeather;