import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import image8 from '../assets/chelsea.jpg';
import image9 from '../assets/arsenalthree.jpg';
import image10 from '../assets/fulham.jpg';
import image11 from '../assets/mancity.jpg';
import image12 from '../assets/manutd.jpg';


function ShopPage() {
    return (
      <div>
        <Header /> 
        
        <div className="shop-page-jersey-images-container">
            <div className="shop-page-jersey-item">
                <img src={image8} alt="Chelsea Jersey" />
                <p>
                    Chelsea Jersey 
                    <br />
                    $60
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image9} alt="Arsenal Jersey" />
                <p>
                    Arsenal Jersey 
                    <br />
                    $60
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image10} alt="Fulham Jersey" />
                <p>
                    Fulham Jersey 
                    <br />
                    $60
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image11} alt="Manchester City Jersey" />
                <p>
                    Manchester City Jersey 
                    <br />
                    $60
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image12} alt="Manchester United Jersey" />
                <p>
                    Manchester United Jersey 
                    <br />
                    $60
                </p>
            </div>
        </div>
        
        <Footer /> 
      </div>
    );
}
  
export default ShopPage;