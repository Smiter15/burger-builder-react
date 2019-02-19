import React from 'react';

// Styles
import classes from './Logo.module.css';

// Images
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="y burger" />
    </div>
);

export default logo;