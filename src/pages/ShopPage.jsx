import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import image8 from '../assets/chelsea.jpg';
import image9 from '../assets/arsenalthree.jpg';
import image10 from '../assets/fulham.jpg';
import image11 from '../assets/mancity.jpg';
import image12 from '../assets/manutd.jpg';
import image13 from '../assets/internacional.jpg';
import image14 from '../assets/corinthians.jpg';
import image15 from '../assets/gremio.jpg';
import image16 from '../assets/flamengo.jpg';
import image17 from '../assets/fluminense.jpg';
import image18 from '../assets/bayerntwo.jpg';
import image19 from '../assets/bourssia.jpg';
import image20 from '../assets/frankfurt.jpg';
import image21 from '../assets/leverkusen.jpg';
import image22 from '../assets/schalke.jpg';
import image23 from '../assets/internazionale.jpg';
import image24 from '../assets/juventus.jpg';
import image25 from '../assets/internazionaletwo.jpg';
import image26 from '../assets/lazio.jpg';
import image27 from '../assets/milan.jpg';
import image28 from '../assets/barcelona.jpg';
import image29 from '../assets/madrid.jpg';
import image30 from '../assets/lacoruna.jpg';
import image31 from '../assets/rayo.jpg';
import image32 from '../assets/nsei.jpg';
import image33 from '../assets/intermiami.jpg';
import image34 from '../assets/lafc.jpg';
import image35 from '../assets/philadelphia.jpg';
import image36 from '../assets/lagalaxy.jpg';
import image37 from '../assets/orlando.jpg';
import image38 from '../assets/paris.jpg';
import image39 from '../assets/marselia.jpg';
import image40 from '../assets/lyon.jpg';
import image41 from '../assets/marseliatwo.jpg';
import image42 from '../assets/paristwo.jpg';




function ShopPage({ addToCart, successMessage }) {
    return (
      <div>
        <Header /> 

        <div className="shop-page-title">
            <h1>Jersey Paradise</h1>
        </div>
        
        <div className="shop-page-jersey-images-container">
            <div className="shop-page-jersey-item">
                <img src={image8} alt="Chelsea Jersey" />
                <p>
                    <strong>Chelsea Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Chelsea Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image9} alt="Arsenal Jersey" />
                <p>
                <strong>Arsenal Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Arsenal Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image10} alt="Fulham Jersey" />
                <p>
                <strong>Fulham Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Fulham Jersey')}>BUY NOW</button>
                </p>
            </div>

            <div className="shop-page-jersey-item">
                <img src={image11} alt="Manchester City Jersey" />
                <p>
                <strong>Man City Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Man City Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image12} alt="Manchester United Jersey" />
                <p>
                <strong>Man United Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Man United Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image13} alt="Internacional Jersey" />
                <p>
                <strong>Internacional Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Internacional Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image14} alt="Corinthians Jersey" />
                <p>
                <strong>Corinthians Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Corinthians Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image15} alt="Gremio Jersey" />
                <p>
                <strong>Gremio Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Gremio Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image16} alt=" Flamengo Jersey " />
                <p>
                <strong>Flamengo Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Flamengo Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image17} alt="Fluminense Jersey " />
                <p>
                <strong>Fluminense Jersey </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Fluminense Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image18} alt="Bayern Munich Jersey" />
                <p>
                <strong>Bayern Munchen Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Bayer Munich Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image19} alt="Borussia Dortmund Jersey" />
                <p>
                <strong>Borussia Dortmund Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Borussia Dortmund Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image20} alt="Frankfurt Jersey" />
                <p>
                <strong>Frankfurt Jersey </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Frankfurt Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image22} alt="Schalke04" />
                <p>
                <strong>Schalke04 </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Schalke 04 Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image21} alt="Bayern Leverkusen" />
                <p>
                <strong>Bayern Leverkusen</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Bayern Leverkusen Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image29} alt="Real Madrid Jersey" />
                <p>
                <strong>Real Madrid Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Real Madrid Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image28} alt="Barcelona Jersey" />
                <p>
                <strong>Barcelona Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Barcelona Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image30} alt="La Coruna Jersey" />
                <p>
                <strong>La Coruna Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('La Coruna Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image31} alt="Rayo Vallecano" />
                <p>
                <strong>Rayo Valecano</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Rayo Vallecano Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image32} alt="Real Valladolid" />
                <p>
                <strong>Real Valladolid</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Real Valladolid Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image33} alt="Inter Miami Jersey" />
                <p>
                <strong>Inter Miami Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Inter Miami Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image34} alt="LAFC" />
                <p>
                <strong>LAFC Jersey </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('LAFC Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image35} alt="Philadelphia Union" />
                <p>
                <strong>Philadelphia Jersey </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Philadelphia Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image37} alt="Orlando City Jersey" />
                <p>
                <strong>Orlando City Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Orlando City Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image36} alt="LA Galaxy" />
                <p>
                <strong>LA Galaxy Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('LA Galaxy Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image38} alt="Paris Saint Germain" />
                <p>
                <strong>PSG Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('PSG Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image39} alt="Olympique Marsellie" />
                <p>
                <strong>Olympique Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Olympique Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image40} alt="Lyon Jersey" />
                <p>
                <strong>Lyon Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Lyon Jersey')}>BUY NOW</button>
                </p>
            </div>
            <div className="shop-page-jersey-item">
                <img src={image41} alt="Olympique Marsellie" />
                <p>
                <strong>Olympique Jersey</strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('Olympique Jersey')}>BUY NOW</button>
                </p>
            </div>
            
            <div className="shop-page-jersey-item">
                <img src={image42} alt="Paris Saint Germain" />
                <p>
                <strong>PSG Jersey </strong>
                    <br />
                    $60
                    <br />
                    <button onClick={() => addToCart('PSG Jersey')}>BUY NOW</button>
                </p>
            </div>
        </div>

        {successMessage && (
                <div className="success-message">{successMessage}</div>
            )}

        <Footer /> 
      </div>
    );
}
  
export default ShopPage;