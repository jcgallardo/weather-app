import React from 'react';
import CityInfo from './CityInfo';
import '@fontsource/roboto/300.css';

export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = () => <CityInfo city="Madrid" country="España"></CityInfo>