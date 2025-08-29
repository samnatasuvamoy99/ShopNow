import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Cartitems.css'
import './Checkcard.css'
import './Footer.css'
import { Provider } from "react-redux";
import store from './Store/Store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
