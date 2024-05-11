import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { lazy, Suspense} from 'react'

import { createBrowserRouter, RouterProvider,BrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/home/Home.jsx'
// import About from './components/about/About.jsx'
// import Services from './components/services/Services.jsx'
// import Rooms from "./components/rooms/Rooms.jsx"
// import Gallary from './components/gallary/Gallary.jsx'

const Layout = lazy(()=>import('./Layout.jsx'))
const Home = lazy(()=>(import('./components/home/Home.jsx')))
const About = lazy(()=>import('./components/about/About.jsx'))
const Services = lazy(()=>import('./components/services/Services.jsx'))
const Rooms = lazy(()=>import("./components/rooms/Rooms.jsx"))
const Gallary = lazy(()=>import('./components/gallary/Gallary.jsx'))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout></Layout>}> 
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
    <Suspense fallback={<div>Loading</div>}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Suspense>
  </React.StrictMode>,
)
