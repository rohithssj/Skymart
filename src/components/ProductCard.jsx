import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const ProductCard = ({ products, inCart }) => {
  let { setCartItems, incrementData,decrementData } = useContext(MyStore)
  const navigate = useNavigate()
  return (

    <>

      <div className="w-72 bg-gray-300 text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      onClick={()=>navigate(`/detail/${products.id}`)}
      >

        <div className="h-60 bg-gray-100 flex items-center justify-center p-6">
          <img
            src={products.image}
            alt={products.title}
            className="h-full object-contain"
          />
        </div>

        <div className="p-5">

          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full capitalize">
            {products.category}
          </span>

          <h2 className="text-lg font-semibold mt-3 line-clamp-2 h-14">
            {products.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{products.rating.rate}</span>
            <span className="text-gray-500">
              ({products.rating.count})
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-600">
              ${products.price}
            </h3>


            {
              inCart ? <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <div className="flex gap-3 text-xl cursor-pointer">
                  <span onClick={() => decrementData(products.id)}>-</span>
                  <span>{inCart.quantity}</span>
                  <span onClick={() => incrementData(products.id)}>+</span>
                </div>
              </button>
                : <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer" onClick={() => {
                  setCartItems((prev) => [...prev, { ...products, quantity: 1 }])
                }}>
                  Add Cart
                </button>

            }

          </div>

        </div>
      </div>
    </>
  );
};

export default ProductCard;