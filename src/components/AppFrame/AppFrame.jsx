import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Grid, Toolbar, IconButton, Link, Typography } from '@material-ui/core'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as LinkRouter } from 'react-router-dom'

const AppFrame = ({ children }) => {
  return (
    <Grid container justifyContent='center'>
        <AppBar position='static'>
            <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="menu">
                    <Link
                        component={ LinkRouter }
                        to="main"
                        color="inherit"
                        aria-label="menu"
                    >
                        <IconContext.Provider value={{size: '2em'}}>
                            <WiDaySunny />
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                <Typography variant='h6' color="inherit">Weather App</Typography>
            </Toolbar>
        </AppBar>
        <Grid item xs={12} sm={11} md={10} bg={8}>
            { children }
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame