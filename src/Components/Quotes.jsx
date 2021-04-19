import React from 'react';

const Quotes = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.simpsonCharacter.character}</h1>
      <p>{props.simpsonCharacter.quote}</p>
      <img
        src={props.simpsonCharacter.image}
        alt={props.simpsonCharacter.character}
      />
    </div>
  );
};

export default Quotes;
