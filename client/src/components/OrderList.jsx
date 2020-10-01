import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Loader from "./Loader";

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    axios.get("/order").then((res) => {
      const products = res.data;
      this.setState({ products });
      console.log(products);
    });
  }

  render() {
    console.log(this.state, "state");
    const { products } = this.state;
    return (
      <div className="home">
        <div className="container">
          <NavBar />
          {console.log(products)}
          {products ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Product</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">Order</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {products.map((product, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.product.name}</td>
                      <td>{product.product.quantity}</td>
                      <td>{product.quantity}</td>
                      <th scope="row">cancel</th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
