import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = props => {
  return (
    <div>
      NotFoundPage
      <div>
        <Link to="/main">Ir a main</Link>
      </div>
    </div>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage;
