import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }

        localStorage.setItem("username", name);

        navigate("/");
    };
    useEffect(() => {

        if (localStorage.getItem("username")) {
            navigate("/");
        }

    }, []);

    return (
        <div className="min-h-screen bg-black flex justify-center items-center">

            <div className="bg-neutral-900 border border-neutral-700 rounded-3xl p-10 w-[400px]">

                <h1 className="text-4xl font-bold text-center mb-3">
                    Welcome to
                    <span className="text-lime-400"> SkyMart</span>
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Enter your name to continue
                </p>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 outline-none focus:border-lime-400"
                />

                <button
                    onClick={handleLogin}
                    className="w-full mt-6 bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
                >
                    Continue
                </button>

            </div>

        </div>
    );
};

export default Login;