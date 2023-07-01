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
import ContactUs from './pages/ContactUs'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } >
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='contact us' element={ <ContactUs /> } />

      <Route path='*' element={ <ErrorPage /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
