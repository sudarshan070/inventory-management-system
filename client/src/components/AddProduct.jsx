import React from "react";
import NavBar from "./NavBar";
import Img from "../media/abc.png";
import axios from "axios";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "",
      warehouse: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post("product/add", { product: this.state }).then((res) => {
      this.props.history.push("/");
    });
  };

  render() {
    const { name, quantity, warehouse } = this.state;
    return (
      <>
        <div className="home">
          <div className="container">
            <NavBar />
            <div className="d-flex justify-content-between align-items-center">
              <img src={Img} alt="png" />
              <div className="outer-box">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
                />
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={this.handleInput}
                />
                <input
                  className="form-control"
                  type="text"
                  name="warehouse"
                  value={warehouse}
                  onChange={this.handleInput}
                />
                <button
                  className="btn-form btn-block"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
