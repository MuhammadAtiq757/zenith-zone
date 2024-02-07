import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route';

// const backgroundImageUrl = 'url("https://i.ibb.co/txSnGg9/Sky-blue-bubbles.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <div className='max-w-7xl mx-auto'
  style={{
    // backgroundImage: backgroundImageUrl,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
  }}
    >
      <RouterProvider router={router} />
    </div>

    
  </React.StrictMode>,
)

