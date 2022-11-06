import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../../hooks/useVanta'

const WelcomeScreen = ({
    children
}) => {
    const { myRef } = useVanta();

    return (
        <div ref={ myRef } className="full">
            { children }
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen