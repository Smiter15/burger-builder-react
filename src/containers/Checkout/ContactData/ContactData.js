import React, { Component } from 'react';

// Axios instance
import axios from '../../../axios-orders';

// Components
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Styles
import classes from './ContactData.module.css';

class ContactData extends Component {

    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    };

    order = e => {
        e.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Matt',
                address: {
                    street: 'London'
                },
                email: 'a@a'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            });
    };

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postcode" placeholder="Your postcode" />
                <Button btnType="Success" clicked={this.order}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;