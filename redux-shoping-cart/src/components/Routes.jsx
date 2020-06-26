import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";
import Form from "./Form";
import AddProduct from "./AddProduct";
import Edit from "./Edit";
import { connect } from "react-redux";
import { addToCart, updateItem } from "../redux/action";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/products" render={() => <Products />}></Route>
        <Route path="/cart" render={() => <Cart />}></Route>
        <Route path="/orders" render={() => <Orders />}></Route>
        <Route path="/product/add" render={() => <AddProduct />}></Route>
        <Route path="/product/:id/edit" render={() => <Edit />}></Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => ({
  // products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  // addToCart: (id) => dispatch(addToCart(id)),
  // updateItem: (id) => dispatch(updateItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
