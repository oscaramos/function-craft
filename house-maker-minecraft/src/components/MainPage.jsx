import React from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import menuBackground from '../assets/img/menu-background.jpg';

import { makeStyles } from '@material-ui/core/styles';

import 'particles.js'
import '../assets/css/App.css'

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundImage: `linear-gradient(rgba(20, 26, 35,0.55), rgba(20, 26, 35, 0.55)), url("${menuBackground}")`,
    backgroundSize: 'cover',

    marginTop: '10em',
    height: '20em',

    borderRadius: 5,
    boxShadow: theme.shadows[8],
    zIndex: 402,
  },

  inputText: {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'minecraft, serif',
    fontSize: '1.25rem',
    border: '2px solid',
    borderColor: 'rgb(160, 160, 160)',

    width: 300,
    height: 40,
    margin: 0,
  },

  label: {
    color: 'rgb(160, 160, 160)',
    fontFamily: 'minecraft, serif',
    fontSize: '1.10rem'
  }
}))

function MainPage({ onChangeUrl, onChangeWorldName, valueUrl, valueWorldName }) {
  const classes = useStyles();

  return <>
    <div id='particle-container' />
    <Container maxWidth='sm' className={classes.menuContainer}>
      <Grid container direction='column' spacing={3} alignItems='center' justify='center'
            style={{ height: '100%' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <label className={classes.label}>URL</label>
            </Grid>
            <Grid item>
              <input type='text'
                     value={valueUrl}
                     onChange={onChangeUrl}
                     className={classes.inputText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <label className={classes.label}>World Name</label>
            </Grid>
            <Grid item>
              <input type='text'
                     value={valueWorldName}
                     onChange={onChangeWorldName}
                     className={classes.inputText}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <button className='mc-button' style={{ width: 308, height: 40, margin: 0, fontSize: '1.25rem' }}>
            Make house
          </button>
        </Grid>
      </Grid>
    </Container>
  </>
}

export default MainPage
