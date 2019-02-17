import React, { Component } from 'react';

// Containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// Components
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
