import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './app.css';
import image1 from './assets/jzy.jpg';
import image2 from './assets/intermilano.jpg';
import image3 from './assets/newcastle.jpg';
import image4 from './assets/arsenal.jpg';
import image5 from './assets/vasco.jpg';
import image7 from './assets/main.jpg';

function App() {
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
                </div>
                <div className="jersey-item">
                  <img src={image3} alt="Newcastle jersey" />
                  <p>
                    Newcastle jersey
                    <br />
                    $60
                  </p>
                </div>
                <div className="jersey-item">
                  <img src={image4} alt="Arsenal jersey" />
                  <p>
                    Arsenal jersey
                    <br />
                    $60
                  </p>
                </div>
                <div className="jersey-item">
                  <img src={image5} alt="Vasco da Gama jersey" />
                  <p>
                    Vasco da Gama jersey
                    <br />
                    $60
                  </p>
                </div>
              </div>

              <div className="button-view">
                <button>SHOP ALL</button>
              </div>

              <section>
                <div className="about-section">
                  <h2>
                    About
                    <br />
                    our company
                  </h2>
                  <p>
                    Welcome to Jersey Paradise! We're passionate about delivering high-quality,
                    authentic jerseys that let you proudly showcase your team spirit in style.
                    Whether you're a die-hard fan or just love the game, we have the perfect jersey
                    waiting for you!
                  </p>
                </div>
              </section>

              <section>
                <div className="imagem">
                  <img src={image7} alt="About Us" />
                </div>
              </section>
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;