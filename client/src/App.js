import React from 'react';
import Home from './components/Home'
import 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import OrderProduct from './components/OrderProduct'
import OrderList from './components/OrderList'
import Header from './components/Header';



class App extends React.Component {
  render() {
    return (
      <div>
        <>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/product/:id" component={OrderProduct} />
              <Route path='/orderlist' component={OrderList} />
            </Switch>
          </BrowserRouter>
        </>
      </div>
    );
  }
}

export default App;
