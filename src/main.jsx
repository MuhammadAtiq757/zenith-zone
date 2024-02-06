import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <div
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

// https://i.ibb.co/JBfJjWH/547ef335-9218-476a-ba00-913e7b96d322.jpg
// https://i.ibb.co/9nTD7Vz/Geometric-Curves-by-Hk3-To-N-on-Twitter.jpg
// https://i.ibb.co/3B3VCZF/Download-free-image-of-Gradient-i-Phone-wallpaper-oil-bubble-in-water-background-by-Teddy-about-ipho.jpg
// https://i.ibb.co/J51mRW4/f217d551-b22a-47b0-bc8e-302ce265e356.jpg
// https://i.ibb.co/0ZR1y5R/Sky-blue-bubbles.jpg