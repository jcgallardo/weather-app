import React from 'react'
import CityInfo from './CityInfo'; // SUT: Subject under testing
import { render, screen } from "@testing-library/react";

test("City Info render", async () => {
    // AAA: Arrange + Act + Assert
    const city = 'Madrid';
    const country = 'España';

    // Arrange
    // Render: renderiza el componente y devuelve un conjunto de funciones
    render(<CityInfo city={ city } country={ country } />);

    // Assert
    const cityAndCountryComponent = await screen.findAllByRole("heading");

    // ¿Cuándoo será correcto el test?
    // Cuando en el primer elemento se encuentre la ciudad Madrid
    // y cuando en el segundo elemento se encuentre el país España
    expect(cityAndCountryComponent[0]).toHaveTextContent(city);
    expect(cityAndCountryComponent[1]).toHaveTextContent(country);
})