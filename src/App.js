import React, { useState } from 'react';
import './App.css';
import logo from './brewdog-logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function App() {

  let [beer, setBeer] = useState({})

  const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(res => res.json())
      .then((data) => {
        setBeer(data[0])
        console.log(data)
      })
  }


  const classes = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }))();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo'></img>
        <h1>Brewdog</h1>
        <h5>This app will give you a random beer from brewdogs collection {'\u{1F37A}'}</h5>
        <Button variant="contained" color="primary" className={classes.button}
          onClick={getRandomBeer}>
          Beer me up!{'\u{1F603}'}
        </Button>
        <div>{beer.name}</div>
        <br />
        <br />
        <br />
        <br />
        <a className='Brewdog-site-link' href="https://www.brewdog.com"
          target="_blank" rel="noopener noreferrer">The official brewdog website</a>
      </header>
    </div>
  );
}

export default App;
