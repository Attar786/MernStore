import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {createBrowserRouter , createRoutesFromElement , Route, } from 'react-icons'
// import './assets/styles/bootstrap.custom.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './assets/styles/bootstrap.custom.css'
import "./assets/styles/index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<app/>}>

    </Route>
  )
),


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <App />
  </React.StrictMode>,
 
)
