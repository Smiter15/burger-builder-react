import React from 'react';

// Components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

// Styles
import classes from './SideDrawer.module.css';

const sideDrawer = props => (
    <>
        <Backdrop clicked={props.closed} show={props.open} />
        <div className={[classes.SideDrawer, props.open ? classes.Open : classes.Close].join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </>
);

export default sideDrawer;