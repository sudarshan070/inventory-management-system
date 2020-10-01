import React from 'react';
import Home from './components/Home'
import 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct'



class App extends React.Component {
  render() {
    return (
      <div>
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/addproduct" component={AddProduct} />
            </Switch>
          </BrowserRouter>
        </>
      </div>
    );
  }
}

export default App;
