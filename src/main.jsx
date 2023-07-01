import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from 'react-router-dom'

import './index.css'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } >
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
