import ConvertUnits from "convert-units";

export const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

export const toCelsius = (temp) => Number(ConvertUnits(temp).from('K').to('C').toFixed(0))

export const getForecastUrl = (city, countryCode) => process.env.REACT_APP_FORECAST_URL
    .replace("{city}", city)
    .replace("{countryCode}",countryCode)

export const getWeatherUrl = (city, countryCode) => process.env.REACT_APP_WEATHER_URL
    .replace("{city}", city)
    .replace("{countryCode}",countryCode)