import React, { useEffect, useState } from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from '@material-ui/lab/Alert';

import menuBackground from '../assets/img/menu-background.jpg';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import 'particles.js'
import '../assets/css/App.css'
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundImage: `linear-gradient(rgba(20, 26, 35,0.55), rgba(20, 26, 35, 0.55)), url("${menuBackground}")`,
    backgroundSize: 'cover',

    marginTop: '10em',
    height: '30em',
    paddingLeft: '6em',
    paddingRight: '6em',

    borderRadius: 5,
    boxShadow: theme.shadows[8],
    zIndex: 402,
  },

  inputText: {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'minecraft, serif',
    fontSize: '1.50rem',
    border: '2px solid',
    borderColor: 'rgb(160, 160, 160)',

    width: '95%',
    height: '3em',
    margin: 0,
  },

  label: {
    color: 'rgb(160, 160, 160)',
    fontFamily: 'minecraft, serif',
    fontSize: '1.25rem'
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MainPage({ onChangeUrl, onChangeWorldName, valueUrl, valueWorldName, onSubmit, isLoading, errorURL }) {
  const classes = useStyles();
  const [previousIsLoading, setPreviousIsLoading] = useState(false);
  const [succeed, setSucceed] = useState(false);

  useEffect(() => {
    const finishedTask = isLoading === false && previousIsLoading === true;
    if (finishedTask && errorURL === false) {
      setSucceed(true);
    }
    setPreviousIsLoading(isLoading)
  }, [isLoading])

  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down('md'))

  return <>
    <div id='particle-container' />
    <Container maxWidth={matchMD? 'sm': 'md'} className={classes.menuContainer}>
      <Grid container direction='column' spacing={3} alignItems='center' justify='center'
            style={{ height: '100%', margin: 'auto' }}>
        <Grid container item>
          <Grid container direction='column'>
            <Grid item>
              <label className={classes.label}>URL</label>
            </Grid>
            <Grid item>
              <input type='text'
                     value={valueUrl}
                     onChange={onChangeUrl}
                     className={classes.inputText}
                     spellCheck={false}
                     style={errorURL? {
                       borderColor: 'red'
                     }: undefined}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container direction='column'>
            <Grid item>
              <label className={classes.label}>World Name</label>
            </Grid>
            <Grid item>
              <input type='text'
                     value={valueWorldName}
                     onChange={onChangeWorldName}
                     className={classes.inputText}
                     spellCheck={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <button className='mc-button' style={{ width: '97%', height: '3em', margin: 0, fontSize: '1.50rem' }}
                  onClick={onSubmit}>
            Make house
          </button>
        </Grid>
        {
          isLoading &&
          <Grid item>
            <CircularProgress color='secondary' />
          </Grid>
        }
        {
          succeed && !isLoading &&
          <Grid container item>
            <Alert severity="success" style={{ width: '91%' }}>Finished successfully</Alert>
          </Grid>
        }
      </Grid>
    </Container>
  </>
}

export default MainPage
