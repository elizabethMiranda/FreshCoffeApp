
import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import FreshCoffe from './FreshCoffe.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FreshCoffe />
    </BrowserRouter>
  </React.StrictMode>,
)
