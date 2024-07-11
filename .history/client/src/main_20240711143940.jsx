import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './assets/styles/bootstrap.custom.css';
import "./assets/styles/index.css";
import HomeScreen from '../screen/HomeScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <R path='/' element={<App />}>
     <Route path='/' index='true' element={<HomeScreen></HomeScreen>}>

     
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
