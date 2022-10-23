import { render, screen, fireEvent } from "@testing-library/react";
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
    const citiesComponent = await screen.findAllByRole("button");

    // ASSERT
    expect(citiesComponent).toHaveLength(cities.length);
})

test('CityList click on item', async () => {
    
    // ARRANGE
    const fnClickOnItem = jest.fn();
    render(<CityList cities={ cities } onClickCity={fnClickOnItem} />);

    // ACT
    const citiesComponent = await screen.findAllByRole("button");
    fireEvent.click(citiesComponent[0]);

    // ASSERT
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})