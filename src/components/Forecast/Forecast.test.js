import React from 'react'
import { render, screen } from '@testing-library/react'
import Forecast from '.'

const forecastItems = [
    {weekDay:'lunes', hour:12, state:'sunny', temperature: 25},
    {weekDay:'lunes', hour:18, state:'sunny', temperature: 18},
    {weekDay:'lunes', hour:23, state:'cloudy', temperature: 7},
    {weekDay:'viernes', hour:12, state:'rain', temperature: 16},
    {weekDay:'viernes', hour:18, state:'fog', temperature: 13},
    {weekDay:'viernes', hour:22, state:'cloudy', temperature: 7},
]

test('Forecast render', async () => {
    render(<Forecast forecastItemList={forecastItems} />)

    const items = await screen.findAllByTestId('forecast-item-container');

    expect(items).toHaveLength(forecastItems.length);
})