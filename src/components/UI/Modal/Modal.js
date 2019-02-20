import React, { Component } from 'react';

// Components
import Backdrop from '../Backdrop/Backdrop';

// Styles
import classes from './Modal.module.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                     className={classes.Modal}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Modal;