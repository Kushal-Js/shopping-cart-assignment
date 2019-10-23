import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    // }

    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="modal-header" id="cart-header">
                            <h4 className="modal-title text-white"><b>My Cart</b></h4>
                            <button type="button" className="close" data-dismiss="modal">
                            <i className="fas fa-window-close"></i>
                            </button>
                        </div>


                        <div className="modal-body text-wrap">
                            <span>
                                Lorem40hckjcdcoicodcoicoidwoicwoijcjwiooijwiojedojiccjodjcwojcwjiomxojqqpcoidjcjc
                            </span>
                        </div>


                        <div className="modal-footer">
                            <span>Promo code can be applied on payment page</span>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Proceed to checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;