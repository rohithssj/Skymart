import React from "react";
import { ArrowRight, Package, TrendingUp, Star, Tag } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {

  const navigate = useNavigate()
  const { cartItems } = useContext(MyStore)

  const categories = [
    {
      title: "Electronics",
      value: "electronics",
    },
    {
      title: "Jewellery",
      value: "jewelery",
    },
    {
      title: "Men's Wear",
      value: "men's clothing",
    },
    {
      title: "Women's Wear",
      value: "women's clothing",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-10">

      {/* Hero */}
      <section className="border border-neutral-700 rounded-3xl bg-[#111111] overflow-hidden">

        <div
          className="grid lg:grid-cols-4 gap-8 p-12"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          {/* Left */}
          <div className="lg:col-span-3 flex flex-col justify-center">

            <p className="uppercase tracking-widest text-lime-400 font-semibold mb-4">
              Good Evening 👋
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Welcome back,
              <br />
              <span className="text-lime-400">Rohith!</span>
            </h1>

            <p className="text-neutral-400 mt-5 text-lg max-w-xl">
              Discover today's picks — hand-curated products across
              electronics, fashion and much more.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-lime-400 text-black px-7 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-lime-300 transition cursor-pointer"
                onClick={() => navigate("/shop")}
              >
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button className="border border-neutral-700 px-7 py-3 rounded-xl hover:bg-neutral-900 transition cursor-pointer" onClick={() => navigate("/shop")} >
                View Products
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-5">

            <div className="bg-lime-400/10 border border-lime-400/20 rounded-2xl p-8 text-center">
              <h2 className="text-5xl font-bold text-lime-400">20+</h2>
              <p className="text-neutral-400 mt-2">
                Products Available
              </p>
            </div>

            <div className="border border-neutral-700 rounded-2xl p-8 text-center">
              <h2 className="text-5xl font-bold">Free</h2>
              <p className="text-neutral-400 mt-2">
                Delivery over $999
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border border-neutral-700 rounded-2xl p-6 flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-lime-400/10 flex items-center justify-center">
            <Package className="text-lime-400" />
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </h2>
            <p className="text-lg">Cart Items</p>
            <span className="text-neutral-500 text-sm">
              In your bag
            </span>
          </div>
        </div>

        <div className="border border-neutral-700 rounded-2xl p-6 flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <TrendingUp className="text-blue-400" />
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h2>
            <p className="text-lg">Cart Value</p>
            <span className="text-neutral-500 text-sm">
              Ready to checkout
            </span>
          </div>
        </div>

        <div className="border border-neutral-700 rounded-2xl p-6 flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <Star className="text-yellow-400" />
          </div>

          <div>
            <h2 className="text-4xl font-bold">20</h2>
            <p className="text-lg">Top Products</p>
            <span className="text-neutral-500 text-sm">
              Highly Rated
            </span>
          </div>
        </div>

        <div className="border border-neutral-700 rounded-2xl p-6 flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Tag className="text-purple-400" />
          </div>

          <div>
            <h2 className="text-4xl font-bold">4</h2>
            <p className="text-lg">Categories</p>
            <span className="text-neutral-500 text-sm">
              To explore
            </span>
          </div>
        </div>

      </section>


      <section>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Shop by Category
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="text-lime-400 hover:underline cursor-pointer"
          >
            View All →
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category) => (

            <div
              key={category.value}
              onClick={() =>
                navigate(`/shop?category=${encodeURIComponent(category.value)}`)
              }
              className="h-44 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-xl font-semibold hover:border-lime-400 hover:-translate-y-1 transition-all cursor-pointer"
            >
              {category.title}
            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;