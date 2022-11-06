import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForecastUrl, toCelsius } from "../utils/utils";

const locale = "es-ES";

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
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const now = new Date();
  const days = daysAhead.map((d) => {
    const dat = new Date();
    dat.setDate(now.getDate() + d);
    return dat;
  });

  const dateOptions = { weekday: "short" };

  return days.map((day) => {
    const dayHour = day.toLocaleDateString(locale, dateOptions);
    const temps = dataList
      .filter((item) => {
        const dtDate = new Date(item.dt * 1000); // from unix format
        return (
          dtDate.getFullYear() === day.getFullYear() &&
          dtDate.getMonth() === day.getMonth() &&
          dtDate.getDate() === day.getDate()
        );
      })
      .map((listDay) => listDay.main.temp);

    const min = toCelsius(Math.min(...temps));
    const max = toCelsius(Math.max(...temps));

    return {
      dayHour,
      min,
      max,
      hasTemps: !!temps.length
    };
  }).filter(day => day.hasTemps);
};

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
  const interval = [4, 8, 12, 16, 20, 24];
  return dataList
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      const itemDate = new Date(item.dt * 1000);
      return {
        hour: itemDate.getHours(),
        weekDay: itemDate.toLocaleDateString(locale, { weekday: "long" }),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelsius(item.main.temp),
      };
    });
};

const useCityPage = () => {
  const { city, countryCode } = useParams();
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const url = getForecastUrl(city, countryCode);
      try {
        const response = await axios.get(url);

        const temperature = parseTemperature(response.data.list);
        setChartData(temperature);

        // Forecast
        const forecastData = parseForecast(response.data.list);
        setForecastItemList(forecastData);
      } catch (error) {
        console.error(error);
        if (error.response) {
          // Errores que nos response el server
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          // Errores que suceden por no llegar al server
          setError("Verifique la conexión a internet");
        } else {
          setError("Ha ocurrido un error inesperado");
        }
      }
    };
    fetchForecast();
  }, [city, countryCode]);

  return {
    city,
    chartData, 
    forecastItemList,
    error,
    setError
  }
};

export default useCityPage;
