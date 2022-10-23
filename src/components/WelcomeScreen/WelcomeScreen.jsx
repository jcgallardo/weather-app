import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({
    children
}) => {
    const myRef = useRef(null);
    const [vanta, setVanta] = useState(null);

    // didMount
    useEffect(()=> {
        if (!vanta){
            setVanta(
                Clouds({
                    THREE,
                    el: myRef.current
                })
            )
            console.log('Vanta initialized!')
        }

        // saneamiento del efecto
        return () => {
            if (vanta) {
                vanta.destroy()
                console.log('Vanta destroyed!')
            }
        }
    }, [vanta]);

    return (
        <div ref={ myRef }>
            WelcomeScreen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen