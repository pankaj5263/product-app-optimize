import React from 'react'
import ProductList from '../components/ProductListData/ProductListData';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Home