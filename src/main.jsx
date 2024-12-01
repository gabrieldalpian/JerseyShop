import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);