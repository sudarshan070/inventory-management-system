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
    });
  }

  handleStatus = (id) => {
    axios.put("/order", { order: id }).then((res) => {
      if (res.status === 201) {
        console.log(res.data, "orders");
        this.setState({ orders: res.data.orderList });
      }
    });
  };

  handleDelete = (id) => {
    axios.delete(`/order/${id}`, { order: id }).then((res) => {
      if (res.status === 201) {
        this.props.history.push("/");
      }
    });
  };
  render() {
    const { orders } = this.state;

    console.log(this.state, "here state");
    return (
      <div className="home">
        <div className="container">
          <div className="media-heading">
            <h1>Inventory Management System</h1>
          </div>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          onClick={() => this.handleDelete(order._id)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"
                          ></path>
                          <path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path>
                          <path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path>
                        </svg>
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
