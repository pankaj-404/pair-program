import React from "react";
import { connect } from "react-redux";
import { addToCart, updateItem } from "../redux/action";

function PersionDetails() {
  return <div>PersionDetails</div>;
}

const mapStateToProps = (state) => ({
  // products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  // addToCart: (id) => dispatch(addToCart(id)),
  // updateItem: (id) => dispatch(updateItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersionDetails);
