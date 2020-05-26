import React, { Component } from "react";
//import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
import axios from 'axios';
export default class CartTotals extends Component {

  state = {
    ordermessage:""
  }


  orderhandler= () => {

    const today = new Date();
    const orderdata = {
      cartTotal:this.props.value.cartTotal,
      cart:this.props.value.cart,
      date:today

  }
    axios.post( 'https://react-hooks-e4a1b.firebaseio.com/storeorders.json', orderdata )
    .then( response => {
        this.setState({ordermessage:true});
    } );
  }

  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const emptyCart = cart.length === 0 ? true : false;
    let orderstatus = this.state.ordermessage ? <h3 className = "h-flex justify-content-center">Your order of ${cartTotal} is Successful</h3>:null;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                <button type="button" className="btn btn-primary" onClick = {this.orderhandler}>Order Now</button>
                {orderstatus}
                  
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}