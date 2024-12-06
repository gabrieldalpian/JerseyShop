import React from 'react';

function CartPage({ cart }) {

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
          total += cart[i].price;
        }
        return total;
      };

    return (
        <div>
            <div className="cart-container">
                <h1> Cart Overview</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h3>Total: ${calculateTotal()}</h3>
                        </div>
                    </div>
                )}
            </div>
    <footer>
      <div className="site-name">
        Football Elite 
        <p> Made by <strong>me</strong> </p>
      </div>

      <div className="location">
        <h2> Location</h2>
        <p>123 Main Street, New York</p>
      </div>

      <div className="contact">
        <h2> Contact </h2>
        <p>Footballelite@gmail.com</p>
      </div>
    </footer>
        </div>
    );
}

export default CartPage;