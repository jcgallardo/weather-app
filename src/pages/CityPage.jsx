import React, { useMemo } from "react";
import { Grid, LinearProgress, Paper } from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import { Alert } from "@material-ui/lab";
import useCityPage from "../hooks/useCityPage";
import useCityList from "../hooks/useCityList";
import { getCityCode } from "../utils/utils";
import { getCountryNameByCountryCode } from "../utils/serviceCities";

const CityPage = (props) => {
  const { 
    city,
    countryCode,
    chartData,
    forecastItemList,
    error,
    setError
  } = useCityPage();


  // useMemo evalua que el array es el mismo siempre y cuando "city" y "countryCode" no cambien
  // evita que React trate este nuevo array como un cambio de estado.
  const cities = useMemo(() => ([{city, countryCode }]), [city, countryCode]);

  const { allWeather } = useCityList(cities);
  const weather = allWeather[getCityCode(city, countryCode)];
  const country = getCountryNameByCountryCode(countryCode);

  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;

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
              {
                humidity && wind &&
                <WeatherDetails
                  humidity={humidity}
                  wind={wind}
                />
              }
          </Grid>
          <Grid item>
            { !chartData && !forecastItemList && <LinearProgress /> }
          </Grid>
          <Grid item>
            <ForecastChart data={chartData} />
          </Grid>
          <Grid item>
            { chartData && <Forecast forecastItemList={forecastItemList} /> }
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  );
};

CityPage.propTypes = {};

export default CityPage;
