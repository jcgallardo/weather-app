import React from 'react'
import CityInfo from '.';
import { render, screen } from "@testing-library/react";

test("City Info render", async () => {
    // AAA: Arrange + Act + Assert
    const city = 'Madrid';
    const country = 'España';

    // ARRANGE
    // Render: renderiza el componente y devuelve un conjunto de funciones
    render(<CityInfo city={ city } country={ country } />);

    // ACT
    const cityAndCountryComponent = await screen.findAllByRole("heading");

    // ASSERT
    // ¿Cuándo será correcto el test?
    // Cuando en el primer elemento se encuentre la ciudad Madrid
    // y cuando en el segundo elemento se encuentre el país España
    expect(cityAndCountryComponent[0]).toHaveTextContent(city);
    expect(cityAndCountryComponent[1]).toHaveTextContent(country);
})