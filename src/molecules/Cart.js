import React, { Component } from 'react';
import { CartConsumer, CartContext } from '../shared/cart-context';
import './Cart.css';

class Cart extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {
          categories: []
        }
        this.reduceItem = this.reduceItem.bind(this);
        this.increaseItem = this.increaseItem.bind(this);
      }

    reduceItem(item){
        const cart = this.context;
        cart.removeItem(item);
    }

    increaseItem(item){
        const cart = this.context;
        cart.addItem(item);
    }


    render() {
        return (

            <div role="dialog" className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div tabIndex="1" className="modal-header" id="cart-header">
                            <h4 className="modal-title text-white"><b>My Cart</b>
                                <CartConsumer>
                                    {({ cart }) => (
                                        (cart.length > 0) ?
                                            (<span>({cart.length + ` item`})</span>)
                                            : (<span></span>)
                                    )}
                                </CartConsumer>
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fa fa-window-close cart-close"></i>
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
                                                                <div>
                                                                    <img className="modal-body-item-image" src={`.` + item.value.imageURL} alt=""></img>
                                                                </div>

                                                                <div>
                                                                    <h3 className="item-text">{item.value.name}</h3>
                                                                    <div className="quantity-box">
                                                                        <button className="dot w3-pink" onClick={() => this.reduceItem(item)}><i className="fa fa-minus"></i></button>
                                                                         {item.count} <button className="dot w3-pink" onClick={() => this.increaseItem(item)}><i className="fa fa-plus"></i></button>
                                                                         <i className="fa fa-times" aria-hidden="true"></i>
                                                                         Rs.{item.value.price}
                                                                    </div>
                                                                </div>

                                                                <span className="total-amount">
                                                                    Rs.{item.total}
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
                                                <div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <b>No items in your cart</b><br />
                                                    Your favourite items are just a click away
                                                </div>
                                            </div>
                                        </div>)
                            )}
                        </CartConsumer>

                        <CartConsumer>
                            {({ cart, getGrossTotal }) => (
                                (cart.length > 0) ?
                                    (<div className="modal-footer">
                                        <span>Promo code can be applied on payment page</span>

                                        <button className="btn-checkout w3-button w3-pink" data-dismiss="modal">
                                            <span className="btn-checkout-message">Proceed to checkout</span>
                                            <span className="btn-checkout-amount">{`Rs${getGrossTotal()}   >`}</span>
                                        </button>

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
