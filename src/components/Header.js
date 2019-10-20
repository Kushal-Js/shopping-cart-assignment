import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="bg-white shadow-sm rounded mainheader">
                    <div className="leftitem">
                        <a href="#">
                            <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
                        </a>

                        <span>
                            <a href="/home">Home</a>
                            <a href="/products">Products</a>
                        </span>
                    </div>

                    <div className="ml-auto">
                        <span className="">
                            <a href="#">SignIn</a>
                            <a href="#">Register</a>
                        </span>
                        <img className="" src="http://placehold.it/150x50?text=Logo" alt="">
                        </img>
                    </div>
                </div>
            </header>

        );
    }
}
export default Header;
