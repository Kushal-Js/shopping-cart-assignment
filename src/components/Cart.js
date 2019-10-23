import React, { Component } from 'react';
import { CartConsumer } from '../shared/cart-context';
import './Cart.css';

class Cart extends Component {

    render() {
        return (

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="modal-header" id="cart-header">
                            <h4 className="modal-title text-white"><b>My Cart</b>
                                <CartConsumer>
                                    {({ cart }) => (
                                        (cart.length>0) ?
                                        (<span>({cart.length + ` items`})</span>)
                                        :(<span></span>)
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
                                                                        <i className="fa fa-minus"></i> 1 <i className="fa fa-plus"></i>
                                                                        <i className="fa fa-times" aria-hidden="true"></i>Rs.{item.price}
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
                                                    <b>No items in your cart</b><br/>
                                                    Your favourite items are just a click away
                                                </span>
                                            </div>
                                        </div>)
                            )}
                        </CartConsumer>


                        {/* <CartConsumer>
                                {({ cart }) => (
                                    (cart.length > 0) ?
                                        (
                                        <div className="modal-body">
                                            <div className="lowest-offer">
                                                <img src="./static/images/lowest-price.png" alt=""></img>
                                                <span>You won't find it cheaper anywhere</span>
                                            </div>
                                        </div>
                                        )
                                        : (
                                            <div className="modal-body-empty">
                                                <div className="modal-body-no-item">
                                                    <span>
                                                        <b>No items in your cart</b>
                                                    </span>
                                                    <span>
                                                        Your favourite items are just a click away
                                                    </span>
                                                </div>
                                        </div>)
                                )}
                            </CartConsumer>
                             */}



                        <CartConsumer>
                            {({ cart }) => (
                                (cart.length > 0) ?
                                    (<div className="modal-footer">
                                        <span>Promo code can be applied on payment page</span>

                                        <button type="button" className="btn w3-button w3-pink" data-dismiss="modal">Proceed to checkout</button>

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