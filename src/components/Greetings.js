import React from 'react';

function Greetings(props) {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = 'Hallo';
  } else if (props.lang === 'fr') {
    greeting = 'Bonjour';
  } else if (props.lang === 'en') {
    greeting = 'Buenos';
  } else if (props.lang === 'en') {
    greeting = 'Hey';
  }

  return (
    <div>
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
