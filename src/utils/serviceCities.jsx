const cities = [
    {
        city: 'Madrid',
        country: 'España',
        countryCode: 'ES'
    },
    {
        city: 'Puertollano',
        country: 'España',
        countryCode: 'ES'
    },
    {
        city: 'Priego de Córdoba',
        country: 'España',
        countryCode: 'ES'
    }
]

export const getCities = () => (cities);

export const getCountryNameByCountryCode = (countryCode) => cities.find(city => city.countryCode === countryCode).country