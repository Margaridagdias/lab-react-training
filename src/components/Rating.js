import React from 'react'

const Rating = props => {
    const number = Math.round(Number(props.children));
    return <div className="ratings">{'★'.repeat(number) + '☆'.repeat(5 - number)}</div>;
  };

export default Rating