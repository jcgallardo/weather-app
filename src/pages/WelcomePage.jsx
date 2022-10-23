import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Link as RouterLink } from 'react-router-dom'
import WelcomeScreen from '../components/WelcomeScreen'

const WelcomePage = props => {
  return (
    <WelcomeScreen>
      <Grid container direction='column' justifyContent='center' className='full'>
        <div className="highlight">
          <Grid item container xs={12} justifyContent='center' alignItems='center'>
            <Grid item>
              <IconContext.Provider value={{size:'6em'}}>
                <WiDaySunny></WiDaySunny>
              </IconContext.Provider>
            </Grid>
            <Grid item container direction='column' justifyContent='center' alignItems='center'>
              <Typography variant="h4">Weather App</Typography>
              <Link
                color="inherit"
                aria-label='menu'
                component={ RouterLink }
                to="/main"
              >
                Entrar
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  )
}

WelcomePage.propTypes = {}

export default WelcomePage