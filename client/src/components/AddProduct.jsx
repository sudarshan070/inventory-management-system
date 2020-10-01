import React from "react";
import NavBar from "./NavBar";
import Img from "../media/ims.png";
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
            <div className="media-heading">
              <h1>Inventory Management System</h1>
            </div>
            <NavBar />
            <div className="d-flex justify-content-between align-items-center">
              <div className='addProduct-img'>
                <img style={{ width: "400px" }} src={Img} alt="png" />
              </div>

              <div className="outer-box">
                <label className="label" htmlFor="">
                  Add Product Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
                />
                <label className="label" htmlFor="">
                  Add Product quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={this.handleInput}
                />
                <label className="label" htmlFor="">
                  Warehouse Name
                </label>
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
