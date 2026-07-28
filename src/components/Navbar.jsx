import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { NavLink } from "react-router";

const Navbar = () => {
  const { setCurrentView, cartItems } = useContext(MyStore);
  const username = localStorage.getItem("username") || "Guest";
  return (
    <header className="max-w-7xl mx-auto px-8 py-6">
      <nav className="flex items-center justify-between">

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentView("home")}
        >
          <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center">
            <NavLink to={"/"}><i className="fa-solid fa-bolt text-black text-lg"></i></NavLink>
          </div>

          <h1 className="text-3xl font-bold">
            <NavLink to={"/"}> Sky<span className="text-lime-400">Mart</span></NavLink>
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <h2

            className="cursor-pointer text-neutral-300 hover:text-lime-400 transition"
          >
            <NavLink to={"/"}>Home</NavLink>
          </h2>

          <h2
            className="cursor-pointer text-neutral-300 hover:text-lime-400 transition"
          >
            <NavLink to={"/shop"}>Shop</NavLink>

          </h2>

          <h2
            className="cursor-pointer text-neutral-300 hover:text-lime-400 transition">
            <NavLink to={"/about"}>About</NavLink>

          </h2>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden lg:flex items-center gap-3 border border-neutral-700 rounded-xl px-4 py-2 bg-neutral-900">

            <div className="w-8 h-8 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
              {username.charAt(0).toUpperCase()}
            </div>

            <span className="text-neutral-200">
              {username}
            </span>

          </div>

          {/* Cart */}
          <button
            className="relative w-12 h-12 border border-neutral-700 rounded-xl flex items-center justify-center hover:border-lime-400 hover:text-lime-400 transition"
          >
            <NavLink to={"/cart"}>
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </NavLink>


            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("username");
              window.location.href = "/login";
            }}
            className="hidden lg:flex w-12 h-12 border border-neutral-700 rounded-xl items-center justify-center hover:border-red-400 hover:text-red-400 transition"
          >

            <i className="fa-solid fa-arrow-right-from-bracket"></i>

          </button>

          <button className="lg:hidden w-12 h-12 border border-neutral-700 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;