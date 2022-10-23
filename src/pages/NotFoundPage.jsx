import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import AppFrame from '../components/AppFrame'

const NotFoundPage = props => {

  return (
    <AppFrame>
      <Grid container direction='column' justifyContent='center' className='full'>
        <Grid item container xs={12} justifyContent='center' alignItems='center'>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item>
              <IconContext.Provider value={{size:'6em'}}>
                <WiRain></WiRain>
              </IconContext.Provider>
            </Grid>
            <Grid item container direction='column' justifyContent='center' alignItems='center'>
              <Typography variant="h2">404</Typography>
              <Typography variant="h4">La página no existe</Typography>
            </Grid>
            <Grid item>
              <Link
                color="inherit"
                aria-label='menu'
                component={ RouterLink }
                to="/main"
                variant='button'
              >
                Volver al inicio
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage;
