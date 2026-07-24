import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

    let {setCurrentView} = useContext(MyStore)
    return (
        <div className='p-1'>
            <div className='flex items-center justify-between p-3 bg-gray-400 rounded m-3'>
                <h1 className='text-2xl'>SkyMart</h1>
                <div className='hidden lg:flex gap-3 lg:gap-5 items-center cursor-pointer'>
                    <h2 className='hover:text-lime-400 transition duration-300 text-xl' onClick={() => setCurrentView('home')}>Home</h2>
                    <h2 className='hover:text-blue-700 transition duration-300 text-xl' onClick={() => setCurrentView('productcard')}>Shop</h2>
                    <h2 className='hover:text-orange-700 transition duration-300 text-xl'>About</h2>
                </div>
                <div className='flex gap-3 lg:gap-5 items-center'>
                    <h1 className='hidden lg:flex p-2 bg-white/30 rounded-xl'>Rohith</h1>

                    <h1 className='cursor-pointer flex p-2 bg-white/30 rounded-xl' onClick={()=>setCurrentView('cart')}>
                        <i className="fa-solid fa-cart-shopping"></i></h1>

                    <h1 className='hidden lg:flex cursor-pointer'><i className="fa-solid fa-arrow-right-from-bracket"></i></h1>

                    <h1 className='lg:hidden cursor-pointer flex'><i className="fa-solid fa-bars"></i></h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar