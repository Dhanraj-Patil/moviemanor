import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NextUIProvider } from "@nextui-org/react";
import Home from './pages/Home';
import './App.css'
import Navigation from './components/Navigation';
import Results from './pages/Results';
import Footer from './components/Footer';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/my-list",
    element: <Results />
  }
]);

function App() {

  return (
    <>
      <NextUIProvider>
        <Navigation />
        <RouterProvider router={router} />
        <Footer />
      </NextUIProvider>
      
    </>
  )
}

export default App
