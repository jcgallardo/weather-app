import { render, screen } from "@testing-library/react";
import CityList from ".";

const cities = [
    {
        city: 'Madrid',
        country: 'España'
    },
    {
        city: 'Puertollano',
        country: 'España'
    },
    {
        city: 'Priego de Córdoba',
        country: 'España'
    }
];

test('CityList renders with cities', async () => {
    
    // ARRANGE
    // Render: renderiza el componente y devuelve un conjunto de funciones
    render(<CityList cities={ cities } />);

    // ACT
    const citiesComponent = await screen.findAllByRole("listitem");

    // ASSERT
    expect(citiesComponent).toHaveLength(cities.length);
})