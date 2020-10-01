import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Loader from "./Loader";

export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null,
      status: false,
    };
  }

  componentDidMount() {
    axios.get("/order").then((res) => {
      const orders = res.data;
      this.setState({ orders });
      // console.log(orders);
    });
  }

  handleStatus = (id) => {
    console.log(id, "here");
    axios.put("/order", { order: id }).then((res) => {
      if (res.status === 201) {
        this.props.history.push("/");
      }
    });
  };
  render() {
    const { orders } = this.state;
    console.log(this.props, "here state");
    return (
      <div className="home">
        <div className="container">
          <NavBar />
          {orders ? (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Product</th>
                  <th scope="col">Order quantity</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {orders.map((order, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{order.name}</td>
                      <td>{order.product.name}</td>
                      <td>{order.quantity}</td>
                      <td>{order.status}</td>
                      <th scope="row">
                        {order.status.toLowerCase() === "confirmed" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            onClick={() => this.handleStatus(order._id)}
                          >
                            <path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path>
                            <path
                              fillRule="evenodd"
                              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                            ></path>
                          </svg>
                        ) : (
                          ""
                        )}
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
    );
  }
}
