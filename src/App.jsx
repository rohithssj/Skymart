import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Home from './components/Home'
import Cart from './components/Cart'
import { MyStore } from './context/MyContext'
import axios from 'axios'
import About from './components/About'
import { BrowserRouter, Route, Routes } from "react-router";
import AppRoutes from './routes/AppRoutes'
import { useNavigate } from "react-router";

const App = () => {

  let { currentView, cartItems } = useContext(MyStore)

  const [productsData, setProductsData] = useState([])
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) {
      navigate("/login");
    }

  }, []);



  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products")
      setProductsData(res.data)
    } catch (error) {
      console.log("Errors", error)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])



  return (
    <div className='min-h-screen bg-black text-white'>

      <Navbar />
      <AppRoutes productsData={productsData} totalItems={totalItems} />


      {/* 
      {currentView == 'home' && <Home />}
      <div className='max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {currentView == 'productcard' &&
          productsData.map((elem) => {
            let inCart = cartItems.find((val) => val.id == elem.id)
            return <ProductCard products={elem} key={elem.id} inCart={inCart} />
          })
        }
      </div>

      {currentView == 'cart' && <Cart totalItems={totalItems}/>}
      {currentView == 'about' && <About />} */}
    </div>
  )
}

export default App