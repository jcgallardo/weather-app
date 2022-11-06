import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForecastUrl } from "../utils/urls";
import getChartData from "../utils/transform/getChartData";
import getForecastItemList from "../utils/transform/getForecastItemList";

const locale = "es-ES";

const useCityPage = () => {
  const { city, countryCode } = useParams();
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const [error, setError] = useState(null);

  useDebugValue(`useCityPage ${city}`)

  useEffect(() => {
    const fetchForecast = async () => {
      const url = getForecastUrl(city, countryCode);
      try {
        const response = await axios.get(url);

        const chartData = getChartData(response.data.list, locale);
        setChartData(chartData);

        // Forecast
        const forecastData = getForecastItemList(response.data.list, locale);
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
