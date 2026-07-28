import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductDetail = () => {

  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(MyStore);
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }

  const addToCart = () => {

    const alreadyExists = cartItems.find((item) => item.id === product.id);

    if (alreadyExists) {

      setCartItems(cartItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + qty, } : item)
      );

    } else {

      setCartItems([...cartItems,{...product,quantity: qty,},
      ]);

    }

  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-5">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-14">


          <div className="bg-white rounded-3xl p-10 flex items-center justify-center">

            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] object-contain"
            />

          </div>


          <div>

            <span className="bg-lime-400/20 text-lime-400 px-4 py-2 rounded-full capitalize">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-6">

              <span className="text-yellow-400 text-2xl">
                ⭐
              </span>

              <span className="text-xl">
                {product.rating.rate}
              </span>

              <span className="text-gray-400">
                ({product.rating.count} Reviews)
              </span>

            </div>

            <div className="mt-8 flex items-center gap-5">

              <h2 className="text-5xl text-lime-400 font-bold">
                ${product.price}
              </h2>

              <span className="bg-red-500 px-4 py-2 rounded-full">
                20% OFF
              </span>

            </div>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              {product.description}
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex justify-between border-b border-gray-800 pb-4">

                <span className="text-gray-400">
                  Category
                </span>

                <span className="capitalize">
                  {product.category}
                </span>

              </div>

              <div className="flex justify-between border-b border-gray-800 pb-4">

                <span className="text-gray-400">
                  Availability
                </span>

                <span className="text-green-400">
                  In Stock
                </span>

              </div>

              <div className="flex justify-between border-b border-gray-800 pb-4">

                <span className="text-gray-400">
                  Rating
                </span>

                <span>
                  {product.rating.rate} / 5
                </span>

              </div>

              <div className="flex justify-between border-b border-gray-800 pb-4">

                <span className="text-gray-400">
                  Reviews
                </span>

                <span>
                  {product.rating.count}
                </span>

              </div>

            </div>

            {/* Quantity */}

            <div className="mt-10">

              <h3 className="text-lg font-semibold mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-6">

                <div className="flex items-center bg-gray-900 rounded-xl overflow-hidden">

                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="px-5 py-3 hover:bg-gray-800 text-2xl"
                  >
                    -
                  </button>

                  <span className="px-6 text-xl">
                    {qty}
                  </span>

                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-5 py-3 hover:bg-gray-800 text-2xl"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <button
              onClick={addToCart}
                className="bg-lime-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-lime-300 transition"
              >
                Add To Cart
              </button>

              <button
                className="border border-gray-700 px-8 py-4 rounded-xl hover:bg-gray-900 transition"
              >
                Buy Now
              </button>

            </div>

            {/* Extra Info */}

            <div className="mt-12 space-y-4">

              <div className="flex items-center gap-3">

                <span className="text-lime-400 text-xl">
                  ✔
                </span>

                <p>Free Delivery on orders above $50</p>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-lime-400 text-xl">
                  ✔
                </span>

                <p>7 Days Easy Return</p>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-lime-400 text-xl">
                  ✔
                </span>

                <p>100% Secure Payment</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;