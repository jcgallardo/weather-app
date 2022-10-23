import React from 'react'
import { Link } from 'react-router-dom'

const CityPage = props => {
  return (
    <div>
      CityPage
      <div>
        <Link to="/main">Ir a main</Link>
      </div>
    </div>
  )
}

CityPage.propTypes = {}

export default CityPage