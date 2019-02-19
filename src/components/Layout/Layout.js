import React from 'react';

// Components
import Toolbar from '../Navigation/Toolbar/Toolbar';

// Styles
import classes from './Layout.module.css';

const layout = props => (
    <>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;