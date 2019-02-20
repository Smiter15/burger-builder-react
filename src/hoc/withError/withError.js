import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withError = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error});
            });
        }

        errorConfirmed = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
};

export default withError;