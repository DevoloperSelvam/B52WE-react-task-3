import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import Crd from './cards.jsx'
import Create from './Head.jsx'
import Port from './cardinfo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Create />
    <Crd />
    <Port />

  </React.StrictMode>,
)
