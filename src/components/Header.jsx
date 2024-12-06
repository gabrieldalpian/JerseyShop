import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="title"><Link to="/App">Football Elite</Link></div>
    </header>
  );
}

export default Header;