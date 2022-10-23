import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = props => {
  return (
    <div>
      WelcomePage
      <div>
        <Link to="/main">Ir a main</Link>
      </div>
    </div>
  )
}

WelcomePage.propTypes = {}

export default WelcomePage