import React from 'react'
import AppFrame from '.'
import { BrowserRouter as Router } from 'react-router-dom'
import MainPage from '../../pages/MainPage'

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            <MainPage/>
        </AppFrame>
    </Router>
)