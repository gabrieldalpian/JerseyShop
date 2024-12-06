import React from 'react';

function CartPage ({cart}) {
    return (
        <div className="cart-overview">
            <h1> Cart Overview </h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CartPage;