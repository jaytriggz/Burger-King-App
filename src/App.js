import React from "react"
import Layout from './components/Layout/Layout';
import Burger from './containers/BurgerBuilder/Burger'

function App() {
  return (
    <div>
      <Layout>
        <Burger></Burger>
      </Layout>
    </div>
  );
}

export default App;
