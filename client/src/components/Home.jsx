import React from "react";
import axios from "axios";
import Loader from "./Loader";
import NavBar from "./NavBar";
import shop from "../media/shop.svg";
import { NavLink } from "react-router-dom";

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
      // console.log({ products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
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
                  // console.log(product, "product in map");
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.warehouse}</td>
                        <th scope="row">
                          <NavLink to={`/product/${product._id}`}>
                            <img style={{ width: 20 }} src={shop} alt="shop" />
                          </NavLink>
                        </th>
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
