import React from 'react'
import { render, screen } from '@testing-library/react'
import ForecastItem from '.'

test('ForecastItem render', async () => {
    render(
        <ForecastItem
            hour={10}
            state='clear'
            temperature={25}
            weekDay='lunes'
        />
    )

    const temperature = await screen.findByText(/25/);
    expect(temperature).toHaveTextContent('25°');
})