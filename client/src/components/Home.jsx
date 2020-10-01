import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Header from "./Header";
import NavBar from "./NavBar";

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
      <>
        <Header />
        <div className="home">
          <div className="container">
            <NavBar />
            {products ? (
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">In Stock</th>
                    <th scope="col">Warehouse</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                {products.map((product, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.warehouse}</td>
                        <th scope="row">shop</th>
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
      </>
    );
  }
}
