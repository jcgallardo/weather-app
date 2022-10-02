import React from "react";
import CityList from ".";

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
    }
]

export const CityListExample = () => <CityList cities={ cities } />