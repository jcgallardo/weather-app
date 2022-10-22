import React from "react";
import CityList from ".";
import { action } from "@storybook/addon-actions";

export default {
    title: 'CityList',
    component: CityList
}

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
]

export const CityListExample = () => <CityList cities={ cities } />
export const CityListWithClickAction = () => <CityList cities={ cities } onClickCity={ action('click en city!') } />