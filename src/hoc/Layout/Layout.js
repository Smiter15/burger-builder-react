import React, { Component } from 'react';

// Components
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// Styles
import classes from './Layout.module.css';

class layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggle = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    };

    render() {
        return (
            <>
                <Toolbar drawerToggle={this.sideDrawerToggle} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default layout;