import React from 'react'
import "./styles.css";
const Header = () => {
    return (
        <>
            <div className="navigation full-width">
                <div className="nav-left logo flex-row">
                    <h2 className="nav-logo gutter-hz-sm">OEBA SHOP</h2>
                    <button className="btn btn-primary-outline btn-shop">Shop</button>
                </div>

                <div className="nav-right">
                    <a className="icon-badge-container">
                        <i className="fas fa-heart" title="wishlist"><span className="icon-badge">0</span></i>
                    </a>
                    <a className="icon-badge-container gutter-hz-sm">
                        <i className="fas fa-shopping-cart" title="cart"><span className="icon-badge">0</span></i>
                    </a>
                    <button className="btn btn-primary-outline text-rg-size">Login</button>
                </div>
            </div>
        </>
    )
}

export default Header