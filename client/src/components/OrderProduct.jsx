import React from "react";
import axios from "axios";

export default class OrderProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      quantity: null,
      warehouse: null,
      customerName: "",
      customerQuantity: 0,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.productSave(id);
  }

  productSave = (id) => {
    axios.get(`/product/${id}`).then((res) => {
      const id = res.data.product._id;
      const name = res.data.product.name;
      const quantity = res.data.product.quantity;
      const warehouse = res.data.product.warehouse;
      this.setState({ name, quantity, warehouse, id });
    });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/order", {
        product: this.state.id,
        name: this.state.customerName,
        quantity: this.state.customerQuantity,
      })
      .then((res) => {
        this.props.history.push("/");
      });
  };

  render() {
    const {
      name,
      quantity,
      warehouse,
      customerName,
      customerQuantity,
    } = this.state;
    return (
      <div className="home">
        <div className="container">
          <div className="outer-box">
            <div className="orderProduct-available">
              <p> product Name: {name}</p>
              <p>Available Quantity: {quantity}</p>
              <p>Warehouse: {warehouse}</p>
            </div>
            <label className="label">Customer Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="name"
              value={customerName}
              name="customerName"
              onChange={this.handleInput}
            />
            {quantity < customerQuantity ? (
              <h1 style={{ color: "tomato" }}>Not Enough quantity in Stock</h1>
            ) : (
              ""
            )}
            <label className="label">Add Quantity</label>
            <input
              className="form-control"
              type="number"
              placeholder="order"
              value={customerQuantity}
              name="customerQuantity"
              onChange={this.handleInput}
            />
            <button
              className="btn-form btn-block"
              type="submit"
              onClick={this.handleSubmit}
            >
              Buy Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}
