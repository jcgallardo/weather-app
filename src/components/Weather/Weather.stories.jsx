import React from "react";
import Weather from ".";

export default {
    title: 'Weather',
    component: Weather
}

export const WeatherCloud = () => <Weather temperature={10} state='cloud' />
export const WeatherSunny = () => <Weather temperature={10} state='sunny' />