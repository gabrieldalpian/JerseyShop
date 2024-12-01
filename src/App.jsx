import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header />

      <div className="body-content">
        <img src={image1} />
      </div>

      <div className='featured-products'>
        Best Sellers 
      </div>

      <div className='jerseys-images'>

        <div className="jersey-item">
          <img src={image2} alt="Inter Milan jersey" />
          <p>Inter Milan jersey<br></br> $60</p>
         
        </div>
        <div className="jersey-item">
          <img src={image3} alt="Newcastle jersey" />
          <p>Newcastle jersey<br></br> $60</p>
          

        </div>
        <div className="jersey-item">
          <img src={image4} alt="Arsenal jersey" />
          <p>Arsenal jersey<br></br> $60</p>
          

        </div>
        <div className="jersey-item">
          <img src={image5} alt="Vasco da Gama jersey" />
          <p>Vasco da Gama jersey<br></br> $60</p>
        </div>
      </div>       

      <div className="button-view">
        <button> SHOP ALL </button>
      </div>

      <section>
        <div className="about-section">
          <h2> About 
            <br></br>our company  </h2>
          <p> Welcome to Jersey Paradise! We're passionate<br></br> about delivering high-quality, authentic jerseys <br></br>
          that let you proudly showcase your team spirit in style.<br></br> Whether you're a die-hard fan or just love the game,<br></br> we have the perfect jersey waiting for you!
          </p>
        </div>
      </section>

      <section>
        <div className="imagem">
          <img src={image7} />
        </div>
      </section>

      <Footer />
      <br></br>
      <br></br>

    </>
  )
}

export default App;

