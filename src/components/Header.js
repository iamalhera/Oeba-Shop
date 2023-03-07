import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.css";
const Header = () => {
    return (
        <>
            <div className="navigation full-width">
                <div className="nav-left logo flex-row">
                    <Link to="/" >
                        <h2 className="nav-logo gutter-hz-sm">OEBA SHOP</h2>
                    </Link>
                    <Link to="/product-page" >
                        <button className="btn btn-primary-outline btn-shop">
                            Shop
                        </button>
                    </Link>
                </div>

                <div className="nav-right">
                    <a className="icon-badge-container">
                        <Link to="/wishlist" >
                            <i className="fas fa-heart" title="wishlist"><span className="icon-badge">0</span></i>
                        </Link>
                    </a>
                    <a className="icon-badge-container gutter-hz-sm">
                        <Link to="/cart-page" >
                            <i className="fas fa-shopping-cart" title="cart"><span className="icon-badge">0</span></i>
                        </Link>
                    </a>
                    <button className="btn btn-primary-outline text-rg-size">Login</button>
                </div>
            </div>
        </>
    )
}

export default Header