import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css';
import image1 from './assets/jzy.jpg';
import image2 from './assets/intermilano.jpg';
import image3 from './assets/newcastle.jpg';
import image4 from './assets/arsenal.jpg';
import image5 from './assets/vasco.jpg';


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


      <Footer />
    </>
  )
}

export default App