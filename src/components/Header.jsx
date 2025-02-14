import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <div className='right'>
          <li><Link to="/shop">Shop</Link></li>
          </div>
          <div className='right2'>
          <li><Link to="/cart">Cart</Link></li>
          </div>
        </ul>
        <div className="title"><Link to="/App">Football Elite</Link></div>
      </nav>
    </header>
  );
}

export default Header;