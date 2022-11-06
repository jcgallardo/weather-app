import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Grid, Paper } from "@material-ui/core";
import ConvertUnits from "convert-units";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import { Alert } from "@material-ui/lab";

const locale = 'es-ES';
const toCelsius = (temp) => Number(ConvertUnits(temp).from('K').to('C').toFixed(0))

/**
 * Parse dataList to format:
 * [{
 *    dayHour: {strin},
 *    min: {integer}.
 *    max: {integer}
 * }]
 * @param {any} dataList 
 * @returns 
 */
const parseTemperature = (dataList) => {
  const daysAhead = [0,1,2,3,4,5];
  const now = new Date();
  const days = daysAhead.map(d => { 
    const dat = new Date();
    dat.setDate(now.getDate() + d)
    return dat;
  });

  const dateOptions = { weekday: 'short' };

  return days.map(day => {
    const dayHour = day.toLocaleDateString(locale, dateOptions);
    const listDays = dataList.filter(item => {
      const dtDate = new Date(item.dt * 1000); // from unix format
      return dtDate.getFullYear() === day.getFullYear()
        && dtDate.getMonth() === day.getMonth()
        && dtDate.getDate() === day.getDate()
    }).map(listDay => (
      listDay.main.temp
    ));

    

    const min = toCelsius(Math.min(...listDays));
    const max = toCelsius(Math.max(...listDays));

    return ({
      dayHour,
      min,
      max
    })
  })
}

/**
 * Parse dataList in format:
 * [{
 *    hour: {integer},
 *    weekDay: {string},
 *    state: {string},
 *    temperature: {integer}
 * }]
 * @param {*} dataList 
 * @returns 
 */
const parseForecast = (dataList) => {
  const interval = [4,8,12,16,20,24];
  return dataList
    .filter((item, index) => interval.includes(index))
    .map(item => {
      const itemDate = new Date(item.dt * 1000);
      return {
        hour: itemDate.getHours(),
        weekDay: itemDate.toLocaleDateString(locale, { weekday: 'long'}),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelsius(item.main.temp)
      }
    })
}

const CityPage = (props) => {
  const { city, countryCode } = useParams();
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try{
        const response = await axios.get(
          process.env.REACT_APP_FORECAST_URL
              .replace('{city}', city)
              .replace('{countryCode}', countryCode)
        );

        const temperature = parseTemperature(response.data.list);
        setData(temperature);


        // Forecast
        const forecastData = parseForecast(response.data.list);
        setForecastItemList(forecastData)
      } catch(error) {
        console.error(error);
        if (error.response) { // Errores que nos response el server
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) { // Errores que suceden por no llegar al server
            setError("Verifique la conexión a internet");
        } else {
            setError("Ha ocurrido un error inesperado");
        }
      }
    }
    fetchForecast();
  }, [city, countryCode])

  const country = "España";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 15;

  return (
    <AppFrame>
      <Paper elevation={3}>
        {
          error && <Alert severity='error' onClose={ () => setError(null) }>{ error }</Alert>
        }
        <Grid container justifyContent="space-around" direction="column">
          <Grid container item xs={12} justifyContent="center" alignItems="flex-end">
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
              <Weather
                state={state}
                temperature={temperature}
                humidity={humidity}
              />
              <WeatherDetails humidity={humidity} wind={wind} />
          </Grid>
          <Grid container item>
            <ForecastChart data={data} />
          </Grid>
          <Grid item>
            { data && <Forecast forecastItemList={forecastItemList} /> }
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
