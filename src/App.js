import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  let [response, setResponse] = useState({})

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
      .then(res => res.json())
      .then((data) => {
        setResponse(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {response[0] ? response[0].name : ''}
        </div>
        <p>Goes well with </p>
        <div>
          {response[0] ? response[0].food_pairing.map((food, index) => {
            return <li key={index}>{food}</li>
          }) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
