import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const { setCurrentView, cartItems } = useContext(MyStore);

  return (
    <header className="max-w-7xl mx-auto px-8 py-6">
      <nav className="flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentView("home")}
        >
          <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center">
            <i className="fa-solid fa-bolt text-black text-lg"></i>
          </div>

          <h1 className="text-3xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <h2
            onClick={() => setCurrentView("home")}
            className="cursor-pointer text-neutral-300 hover:text-lime-400 transition"
          >
            Home
          </h2>

          <h2
            onClick={() => setCurrentView("productcard")}
            className="cursor-pointer text-neutral-300 hover:text-lime-400 transition"
          >
            Shop
          </h2>

          <h2 
          onClick={()=>setCurrentView("about")}
          className="cursor-pointer text-neutral-300 hover:text-lime-400 transition">
            About
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* User */}
          <div className="hidden lg:flex items-center gap-3 border border-neutral-700 rounded-xl px-4 py-2 bg-neutral-900">

            <div className="w-8 h-8 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
              R
            </div>

            <span className="text-neutral-200">
              Rohith
            </span>

          </div>

          {/* Cart */}
          <button
            onClick={() => setCurrentView("cart")}
            className="relative w-12 h-12 border border-neutral-700 rounded-xl flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition"
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Logout */}
          <button className="hidden lg:flex w-12 h-12 border border-neutral-700 rounded-xl items-center justify-center hover:border-red-400 hover:text-red-400 transition">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden w-12 h-12 border border-neutral-700 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;