import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({ children }) => {
    const [currentView, setCurrentView] = useState('home')
    const [cartItems, setCartItems] = useState([])
    const incrementData = (id) => {
        setCartItems((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity + 1 } : val
            })
        })

    }
    const decrementData = (id) => {
        setCartItems((prev) => {
            const updatedCart = prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity - 1 } : val
            })
            return updatedCart.filter((val)=>val.quantity>0)
        })

    }

    return <MyStore.Provider value={{ currentView, setCurrentView, cartItems, setCartItems, incrementData, decrementData }}>

        {children}
    </MyStore.Provider>
}