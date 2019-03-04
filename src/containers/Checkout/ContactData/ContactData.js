import React, { Component } from 'react';

// Axios instance
import axios from '../../../axios-orders';

// Components
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

// Styles
import classes from './ContactData.module.css';

class ContactData extends Component {

    state = {
        loading: false,
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your postcode'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    };

    order = e => {
        e.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for (let formElId in this.state.orderForm) {
            formData[formElId] = this.state.orderForm[formElId].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChanged = (e, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormEl = {
            ...updatedOrderForm[inputId]
        };
        updatedFormEl.value = e.target.value;
        updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.touched = true;
        updatedOrderForm[inputId] = updatedFormEl;

        let formIsValid = true;
        for (let inputId in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputId].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid});
    };

    render() {

        const formElArr = [];

        for (let key in this.state.orderForm) {
            formElArr.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.order}>
                {formElArr.map(formEl => (
                    <Input key={formEl.id}
                           elementType={formEl.config.elementType}
                           elementConfig={formEl.config.elementConfig}
                           value={formEl.config.value}
                           invalid={!formEl.config.valid}
                           shouldValidate={formEl.config.validation}
                           touched={formEl.config.touched}
                           changed={(event) => this.inputChanged(event, formEl.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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