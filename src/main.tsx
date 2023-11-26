import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/productContext.tsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <ProductProvider>
      
          <App />
   
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
