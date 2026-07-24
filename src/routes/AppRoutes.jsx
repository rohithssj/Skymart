import React, { useContext } from 'react'
import Home from '../components/Home'
import ProductCard from '../components/ProductCard'
import About from '../components/About'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'
import { Route, Routes } from 'react-router'
import { MyStore } from '../context/MyContext'

const AppRoutes = ({productsData,totalItems}) => {
    const {cartItems} = useContext(MyStore)
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={
                    <div className='max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {productsData.map((elem) => {
                            let inCart = cartItems.find((val) => val.id == elem.id)
                            return <ProductCard products={elem} key={elem.id} inCart={inCart} />
                        })}
                    </div>
                } />
                <Route path='/about' element={<About />} />
                <Route path='/cart' element={<Cart totalItems={totalItems} />} />
                <Route path='/detail/:id' element={<ProductDetail />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes