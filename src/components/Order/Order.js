import React from 'react';

// Styles
import classes from './Order.module.css';

const order = props => (
    <div className={classes.Order}>
        <p>Ingredients: </p>
        <p>Price: <strong>4</strong></p>
    </div>
);

export default order;