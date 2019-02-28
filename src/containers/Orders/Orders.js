import React, { Component } from 'react';

// Axios instance
import axios from '../../axios-orders';

// Components
import Order from '../../components/Order/Order';
import withError from '../../hoc/withError/withError';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        id: key,
                        ...res.data[key]
                    })
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                           ingredients={order.ingredients}
                           price={+order.price} />
                ))}
            </div>
        );
    }

}

export default withError(Orders, axios);