import React from 'react';

function CreditCard(props) {
  let cc = `${props.number}`;
  let masked = '************' + cc.substr(-4);

  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: '300px',
  };

  return (
    <div className="card" style={style}>
      <p className="card-text">
        <h4>{props.type}</h4>
      </p>
      <p className="card-text">
        <h4>{masked}</h4>
      </p>
      <p className="card-text">
        <h4>
          Expires {props.expirationMonth}/{props.expirationYear}
        </h4>
      </p>
      <p className="card-text">
        <h4>{props.bank}</h4>
      </p>
      <p className="card-text">
        <h4>{props.owner}</h4>
      </p>
    </div>
  );
}

export default CreditCard;
