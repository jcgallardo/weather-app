import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = props => {
  return (
    <div>
      MainPage
      <div>
        <Link to="/main">Ir a main</Link>
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage