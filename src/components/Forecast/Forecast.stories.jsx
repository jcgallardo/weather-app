import React from 'react'
import Forecast from '.'

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItems = [
    {weekDay:'lunes', hour:12, state:'clear', temperature: 25},
    {weekDay:'lunes', hour:18, state:'clear', temperature: 18},
    {weekDay:'lunes', hour:23, state:'clouds', temperature: 7},
    {weekDay:'viernes', hour:12, state:'rain', temperature: 16},
    {weekDay:'viernes', hour:18, state:'drizzle', temperature: 13},
    {weekDay:'viernes', hour:22, state:'clouds', temperature: 7},
]

export const ForecastExample = () => (
    <Forecast
        forecastItemList={forecastItems}
    />
)
