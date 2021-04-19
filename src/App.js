import { useEffect, useState } from 'react';
import './App.css';
import Quotes from './Components/Quotes';
import axios from 'axios';

function App() {
  const [simpsonCharacter, setSimpsonCharacter] = useState('');

  function newQuote() {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setSimpsonCharacter(data[0]);
      });
  }
  useEffect(newQuote, []);
  return (
    <div className='App'>
      <Quotes simpsonCharacter={simpsonCharacter} />
      <button type='button' onClick={newQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;
