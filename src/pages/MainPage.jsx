import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'


const MainPage = props => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/city')
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

  return (
    <div>
      MainPage
      <div>
        <CityList cities={cities} onClickCity={ onClickHandler } />
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage