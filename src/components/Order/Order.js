import React from 'react';

import classes from './Order.module.css';

const order = props => {
  const ingredients = [];
  for (let igName in props.ingredients) {
    ingredients.push({
      name: igName,
      amount: props.ingredients[igName]
    });
  }

  const ingredientsOutput = ingredients.map(ig => {
    return <span
      className={classes.Ingredient}
      key={ig.name}>{ig.name} ({ig.amount})</span>;
  });

  return (
    <div className={classes.Order}>
      <p>{ingredientsOutput}</p>
      <p>Price: <strong>$ {props.price.toFixed(2)}</strong></p>
    </div>
  );
}

export default order;