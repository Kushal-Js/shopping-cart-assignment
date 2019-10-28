import React, { Component } from 'react';
import { CartConsumer } from '../shared/cart-context';
import './Cart.css';

class Cart extends Component {

    reduceItem(){
    }

    increaseItem(){
    }


    render() {
        return (

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="modal-header" id="cart-header">
                            <h4 className="modal-title text-white"><b>My Cart</b>
                                <CartConsumer>
                                    {({ cart }) => (
                                        (cart.length > 0) ?
                                            (<span>({cart.length + ` items`})</span>)
                                            : (<span></span>)
                                    )}
                                </CartConsumer>
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fas fa-window-close"></i>
                            </button>
                        </div>


                        <CartConsumer>
                            {({ cart }) => (
                                (cart.length > 0) ?
                                    (
                                        <div className="modal-body">
                                            <CartConsumer>
                                                {({ cart }) => (
                                                    cart.map((item) => {

                                                        return (
                                                            <div key={item.id} className="modal-body-item">
                                                                <span>
                                                                    <img className="modal-body-item-image" src={`.` + item.imageURL} alt=""></img>
                                                                </span>

                                                                <span>
                                                                    <h3 className="item-text">{item.name}</h3>
                                                                    <span className="quantity-box">
                                                                        <span className="dot w3-pink" onClick={() => this.reduceItem()}><i className="fa fa-minus"></i></span>
                                                                         1 <span className="dot w3-pink" onClick={() => this.increaseItem()}><i className="fa fa-plus"></i></span>
                                                                         <i className="fa fa-times" aria-hidden="true"></i>
                                                                         Rs.{item.price}
                                                                    </span>
                                                                </span>

                                                                <span className="total-amount">
                                                                    Rs.{item.price}
                                                                </span>
                                                            </div>
                                                        )

                                                    })
                                                )}
                                            </CartConsumer>
                                            <div className="lowest-offer">
                                                <img src="./static/images/lowest-price.png" alt=""></img>
                                                <span>You won't find it cheaper anywhere</span>
                                            </div>
                                        </div>)
                                    : (
                                        <div className="modal-body-empty">
                                            <div className="modal-body-no-item">
                                                <span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <b>No items in your cart</b><br />
                                                    Your favourite items are just a click away
                                                </span>
                                            </div>
                                        </div>)
                            )}
                        </CartConsumer>

                        <CartConsumer>
                            {({ cart, getGrossTotal }) => (
                                (cart.length > 0) ?
                                    (<div className="modal-footer">
                                        <span>Promo code can be applied on payment page</span>

                                        <div className="btn-checkout w3-button w3-pink" data-dismiss="modal">
                                            <span className="btn-checkout-message">Proceed to checkout</span>
                                            <span className="btn-checkout-amount">Rs {getGrossTotal()} ></span>
                                        </div>

                                    </div>)
                                    : (
                                        <div className="modal-footer">
                                            <button type="button" className="btn w3-button w3-pink" data-dismiss="modal">Start Shopping</button>
                                        </div>
                                    )
                            )}
                        </CartConsumer>

                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;
