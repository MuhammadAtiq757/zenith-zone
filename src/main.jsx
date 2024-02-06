import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <div className='max-w-7xl mx-auto'
      style={{
        backgroundImage: 'url("https://i.ibb.co/J51mRW4/f217d551-b22a-47b0-bc8e-302ce265e356.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
       
        
      }}
    >
      <RouterProvider router={router} />
    </div>

    
  </React.StrictMode>,
)

