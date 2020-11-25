import React from 'react';

function IdCard(props) {
  return (
    <div>
    <h2>IdCard</h2>
    <img src={props.picture}/>
      <p><h4>First Name: {props.firstName}</h4></p>
      <p><h4>Last Name: {props.lastName}</h4></p>
      <p><h4>Gender: {props.gender}</h4></p>
      <p><h4>Height: {props.height}</h4></p>
      <p><h4>Birth Date: {props.birth.toDateString()}</h4></p>
      
    </div>
  );
}

export default IdCard;
