import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AppFrame from '../components/AppFrame'

const NotFoundPage = props => {
  const history = useHistory();

  return (
    <AppFrame>
      <Paper elevation={3}>
        <Grid container justifyContent='center' alignItems='center' spacing={3} direction="column">
          <Grid item>
            <Typography variant="h1">404</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">Página no encontrada</Typography>
          </Grid>
          <Grid item>
            <Button variant='outlined' onClick={() => history.push('/main')}>
              ir a página principal
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage;
