import React from "react";
import OrderIndexItems from "./order_index_item";
import { Link } from "react-router-dom";

class OrderIndex extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    const orderItems = orders.map(order => {
      return <OrderIndexItems order={order}></OrderIndexItems>;
    });
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Your Orders</h1>
        {orderItems}
      </div>
    );
  }
}

export default OrderIndex;