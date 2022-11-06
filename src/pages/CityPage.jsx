import React from "react";
import { Grid, LinearProgress, Paper } from "@material-ui/core";
import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import ForecastChart from "../components/ForecastChart";
import Forecast from "../components/Forecast";
import AppFrame from "../components/AppFrame";
import { Alert } from "@material-ui/lab";
import useCityPage from "../hooks/useCityPage";

const CityPage = (props) => {
  const { 
    city,
    chartData,
    forecastItemList,
    error,
    setError
  } = useCityPage();

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
