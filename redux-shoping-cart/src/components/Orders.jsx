import React from "react";
import { connect } from "react-redux";

function Orders(state) {
  const { orders } = state;
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Orders</h3>
      {orders?.map((ele, i) => (
        <div style={{ border: "1px solid black", margin: "10px 0" }} key={i}>
          Order {i + 1}
          <div
            style={{
              outline: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span>Name : {ele[0].name}</span>
            <span>Address : {ele[0].add}</span>
            <span>Phone No. : {ele[0].phoneNo}</span>
            <span>
              Date :{ele[0].date.date}/{ele[0].date.month}/{ele[0].date.year}{" "}
              Time:{ele[0].date.time[0]}:{ele[0].date.time[1]}:
              {ele[0].date.time[2]}
            </span>
          </div>
          {ele.map((order) => (
            <tr
              key={order.id}
              style={{
                outline: "1px solid black",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <td>{order.item}</td>
              <td> {order.price}</td>
              <td> {order.quantity}</td>
            </tr>
          ))}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps)(Orders);
