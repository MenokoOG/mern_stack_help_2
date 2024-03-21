import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserProvider from './context/userProvider.jsx'
import './index.css'
import './css/base.css';
import './css/button.css';
import './css/card.css';
import './css/form.css';
import './css/navigation.css';
import './css/responsive.css';
import './css/themes.css';
import './css/typography.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
