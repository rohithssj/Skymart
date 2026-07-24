import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Cart = ({ totalItems }) => {

    const { cartItems, incrementData, decrementData } = useContext(MyStore)
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    console.log(totalItems)
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold mb-6">
                        Shopping Cart ({cartItems.length})
                    </h1>

                    {cartItems.length === 0 ? (
                        <div className="bg-black rounded-xl p-12 text-center shadow">
                            <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
                            <p className="text-gray-500 mt-2">
                                Add some products to get started.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-800 rounded-xl shadow p-5 flex gap-5"
                                >
                                    {/* Image */}
                                    <div className="w-32 h-32 flex items-center justify-center bg-gray-50 rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-24 object-contain"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h2 className="font-semibold text-lg line-clamp-2">
                                                {item.title}
                                            </h2>

                                            <p className="text-gray-500 capitalize mt-1">
                                                {item.category}
                                            </p>

                                            <p className="text-2xl font-bold text-green-600 mt-3">
                                                ${item.price}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-5">

                                            {/* Quantity */}
                                            <div className="flex items-center border rounded-lg overflow-hidden">
                                                <button className="px-4 py-2 hover:bg-gray-700" onClick={() => decrementData(item.id)}>
                                                    -
                                                </button>

                                                <span className="px-5">{item.quantity}</span>

                                                <button className="px-4 py-2 hover:bg-gray-700" onClick={() => incrementData(item.id)}>
                                                    +
                                                </button>
                                            </div>

                                            <button className="text-red-500 hover:text-red-600 font-medium cursor-pointer">
                                                Remove
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div className="bg-gray-400 rounded-xl shadow p-6 h-fit sticky top-8">
                    <h2 className="text-2xl font-bold mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex justify-between">
                            <span>Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Proceed to Checkout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Cart;