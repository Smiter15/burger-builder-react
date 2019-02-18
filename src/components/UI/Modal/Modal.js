import React from 'react';

// Components
import Backdrop from '../Backdrop/Backdrop';

// Styles
import classes from './Modal.module.css';

const modal = props => (
    <>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
             className={classes.Modal}>
            {props.children}
        </div>
    </>
);

export default modal;