import React from "react";
import axios from "axios";
import Loader from "./Loader";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    axios.get("/product/allproduct").then((res) => {
      const products = res.data;
      this.setState({ products });
      console.log({ products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="home">
        <div className="home-hero">
          <h1>Inventory Management System</h1>
        </div>
        {products ? (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">In Stock</th>
                <th scope="col">Warehouse</th>
              </tr>
            </thead>
            {products.map((product, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <th scope="row">1</th>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.warehouse}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
