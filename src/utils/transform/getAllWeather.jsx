import { getCityCode, toCelsius } from "../utils";

const getAllWeather = (response, city, countryCode) => {
    const {
        data: { 
            main: { temp, humidity },
            weather,
            wind: { speed }
        }
    } = response;

    const propName = getCityCode(city, countryCode);
    const temperature = toCelsius(temp);
    const propValue = { 
        temperature,
        state: weather[0]?.main?.toLowerCase(),
        humidity,
        wind: speed
    };

    return {
        [propName]: propValue
    };
}

export default getAllWeather;