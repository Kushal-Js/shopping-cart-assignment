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
        this.myRef = React.createRef();
        this.reduceItem = this.reduceItem.bind(this);
        this.increaseItem = this.increaseItem.bind(this);
        this.checkFocus = this.checkFocus.bind(this);
        this.focusOnTop = this.focusOnTop.bind(this);
      }

    reduceItem(item){
        const cart = this.context;
        cart.removeItem(item);
    }

    increaseItem(item) {
        const cart = this.context;
        cart.addItem(item);
    }

    checkFocus = (e) => {
        if (e.keyCode === 9) {
            this.focusOnTop(e);
        }
    }

    focusOnTop = (e) => {
        
            if (e) {
                e.preventDefault();
            }
            this.myRef.current.focus();
        
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
                            <button ref={this.myRef} type="button" className="cart__close-button" data-dismiss="modal">
                                <i className="fa fa-window-close cart__close-icon"></i>
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
                                                                    <h3 className="cart__cart-item-text">{item.value.name}</h3>
                                                                    <div className="cart__cart-item-quantity-box">
                                                                        <button className="cart__cart-item-action-button w3-pink" onClick={() => this.reduceItem(item)}><i className="cart-icon fa fa-minus"></i></button>
                                                                         {item.count} <button className="cart__cart-item-action-button w3-pink" onClick={() => this.increaseItem(item)}><i className="cart-icon fa fa-plus"></i></button>
                                                                         <i className="fa fa-times" aria-hidden="true"></i>
                                                                         Rs.{item.value.price}
                                                                    </div>
                                                                </div>

                                                                <span className="cart__cart-item-total-amount">
                                                                    Rs.{item.total}
                                                                </span>
                                                            </div>
                                                        )

                                                    })
                                                )}
                                            </CartConsumer>
                                            <div className="cart__lowest-offer">
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

                                        <button className="cart__btn-checkout w3-button w3-pink" data-dismiss="modal" onKeyDown={this.checkFocus}>
                                            <span className="cart__btn-checkout-message">Proceed to checkout</span>
                                            <span className="cart__btn-checkout-amount">{`Rs${getGrossTotal()}   >`}</span>
                                        </button>

                                    </div>)
                                    : (
                                        <div className="modal-footer">
                                            <button type="button" className="btn w3-button w3-pink" data-dismiss="modal" onKeyDown={this.checkFocus}>
                                                Start Shopping</button>
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
