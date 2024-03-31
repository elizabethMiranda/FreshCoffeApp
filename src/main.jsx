
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import './index.css'
import { FreshCoffeProvider } from './context/FreshCoffeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FreshCoffeProvider>
      <RouterProvider router={router} />
    </FreshCoffeProvider>
  </React.StrictMode>,
)
