import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './App.css';
import image1 from './assets/jzy.jpg';
import image2 from './assets/intermilano.jpg';
import image3 from './assets/newcastle.jpg';
import image4 from './assets/arsenal.jpg';
import image5 from './assets/vasco.jpg';
import image7 from './assets/main.jpg';

function App() {
  const [cart, setCart] = useState([]);
  const [successMessage, setSuccessMessage] = useState(''); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    setSuccessMessage(`Your ${item.name} was added to the cart!`);

    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="body-content">
                <img src={image1} alt="Main Banner" />
              </div>

              <div className="featured-products">Best Sellers</div>

              <div className="jerseys-images">
                <div className="jersey-item">
                  <img src={image2} alt="Inter Milan jersey" />
                  <p>
                    Inter Milan jersey
                    <br />
                    $60
                  </p>
                  <button onClick={() => addToCart({ name: 'Inter Milan Jersey', price: 60, image: image2 })}>
                    BUY NOW
                  </button>
                </div>

                <div className="jersey-item">
                  <img src={image3} alt="Newcastle jersey" />
                  <p>
                    Newcastle jersey
                    <br />
                    $60
                  </p>
                  <button onClick={() => addToCart({ name: 'Newcastle Jersey', price: 60, image: image3 })}>
                    BUY NOW
                  </button>
                </div>
                <div className="jersey-item">
                  <img src={image4} alt="Arsenal jersey" />
                  <p>
                    Arsenal jersey
                    <br />
                    $60
                  </p>
                  <button onClick={() => addToCart({ name: 'Arsenal Jersey', price: 60, image: image4 })}>
                    BUY NOW
                  </button>
                </div>
                <div className="jersey-item">
                  <img src={image5} alt="Vasco da Gama jersey" />
                  <p>
                    Vasco jersey
                    <br />
                    $60
                  </p>
                  <button onClick={() => addToCart({ name: 'Vasco Da Gama Jersey', price: 60, image: image5 })}>
                    BUY NOW
                  </button>
                </div>
              </div>

              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}

              <div className="button-view">
                <Link to="/shop" className="button">Shop All</Link>
              </div>

              <section className="about-section">
                <div className="imagem">
                  <img src={image7} alt="About Us" />
                </div>
                <div className="about-container">
                  <div className="about-title">
                    <h2>About our company</h2>
                </div>
                <div className="about-text">
                  <p>Welcome to Jersey Paradise! We're passionate about delivering high-quality, authentic jerseys that let you proudly showcase your team spirit in style. Whether you're a die-hard fan or just love the game, we have the perfect jersey waiting for you!</p>
                </div>
                </div>
              </section>

              <div className='main-footer'>
                <Footer />
              </div>
              <br></br>
              <br></br>
              <br></br>
            </>
          }
        />
        <Route path="/shop" element={<ShopPage addToCart={addToCart} successMessage={successMessage} />} />
        <Route path="/cart" element={<CartPage cart={cart} successMessage={successMessage} />} />
        <Route path="/App" element={<App/>} />
      </Routes>
    </>
  );
}
export default App;