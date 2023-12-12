import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/productContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux_toolkit/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <ProductProvider>
        <AuthProvider>
          <Provider store={store} >
            <App />
          </Provider>
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
