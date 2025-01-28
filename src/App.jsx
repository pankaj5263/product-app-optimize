import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'

function App() {

  return (
    <>
    <h1>Product App</h1>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


// first i will show product data with cards.
// then i will show cards details.