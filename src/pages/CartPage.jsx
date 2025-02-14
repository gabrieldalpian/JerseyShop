import React from 'react';
import Footer from '../components/Footer';


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
          <div className='cart-footer'>
            <Footer />
          </div>
        </div>
    );
}

export default CartPage;