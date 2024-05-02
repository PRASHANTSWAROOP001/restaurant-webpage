import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider,BrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx'
import Rooms from "./components/rooms/Rooms.jsx"
import Gallary from './components/gallary/Gallary.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}> 
     <Route path='' element={<Home></Home>}/>
     <Route path='/about' element={<About></About>}/>
     <Route path="/services" element={<Services></Services>}/>
     <Route path='/rooms' element={<Rooms></Rooms>}/>
     <Route path='/gallary' element={<Gallary></Gallary>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
