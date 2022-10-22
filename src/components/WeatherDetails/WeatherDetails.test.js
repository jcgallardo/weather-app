import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';


test("WeatherDetails render", async () => {
    render(<WeatherDetails humidity={10} wind={80} />);

    const wind = await screen.findByText(/80/);
    const humidity = await screen.findByText(/10/);

    expect(wind).toHaveTextContent('Viento: 80 km/h')
    expect(humidity).toHaveTextContent('Humedad: 10%')
})