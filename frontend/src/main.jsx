import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/Auth_Context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AdminProvider } from './contexts/Admin_Context.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<CookiesProvider>
<AuthProvider>
<AdminProvider>
<BrowserRouter>
  <App/>
  </BrowserRouter>
</AdminProvider>
</AuthProvider>
</CookiesProvider>

  </StrictMode>,
)
