import React from "react";
import { Grid } from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";

const CityPage = (props) => {
  const city = "Madrid";
  const country = "España";
  const state = "cloudy";
  const temperature = 20;
  const humidity = 80;
  const wind = 15;
  const data = [
    {
      dayHour: "Jue 18",
      min: 14,
      max: 22,
    },
    {
      dayHour: "Vie 06",
      min: 18,
      max: 27,
    },
    {
      dayHour: "Vie 12",
      min: 18,
      max: 28,
    },
    {
      dayHour: "Vie 18",
      min: 18,
      max: 25,
    },
    {
      dayHour: "Sab 06",
      min: 15,
      max: 22,
    },
    {
      dayHour: "Sab 12",
      min: 12,
      max: 19,
    },
  ];

  const forecastItemList = [
    { weekDay: "lunes", hour: 12, state: "sunny", temperature: 25 },
    { weekDay: "lunes", hour: 18, state: "sunny", temperature: 18 },
    { weekDay: "lunes", hour: 23, state: "cloudy", temperature: 7 },
    { weekDay: "viernes", hour: 12, state: "rain", temperature: 16 },
    { weekDay: "viernes", hour: 18, state: "fog", temperature: 13 },
    { weekDay: "viernes", hour: 22, state: "cloudy", temperature: 7 },
  ];

  return (
    <Grid container justifyContent="space-around" direction="column" spacing={2}>
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
      <Grid container item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

CityPage.propTypes = {};

export default CityPage;
