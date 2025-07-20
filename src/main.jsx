import React from 'react'
import ReactDOM from 'react-dom/client'
import { ScrollToTop } from './other/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <ScrollToTop /> 
        <App/>
    </Router>
  </React.StrictMode>,
)
