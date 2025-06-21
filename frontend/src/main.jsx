import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/Auth_Context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AdminProvider } from './contexts/Admin_Context.jsx';
import ProductProvider from './contexts/Product_Context.jsx';
import { CartProvider } from './contexts/Cart_Context.jsx';

import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>

<CookiesProvider>

<CartProvider>
    <AuthProvider>
<AdminProvider>
  <ProductProvider>
<BrowserRouter>
  <App/>
  </BrowserRouter>
  </ProductProvider>
</AdminProvider>
</AuthProvider>
</CartProvider>

</CookiesProvider>

  </StrictMode>,
)
