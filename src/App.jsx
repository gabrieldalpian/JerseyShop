import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css';


function App() {
  return (
    <>
      <Header />

      <div className="body-content">
        <p>Body content goes here</p>
      </div>

      <Footer />
    </>
  )
}

export default App