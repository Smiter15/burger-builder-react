import React, { Component } from 'react';

// Components
import Button from '../../../components/UI/Button/Button';

// Styles
import classes from './ContactData.module.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                    <input className={classes.Input} type="text" name="postcode" placeholder="Your postcode" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;