import React from "react";
import {
    Package,
    Users,
    Star,
    Truck,
} from "lucide-react";

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-8 py-10">

            {/* Hero */}
            <section className="text-center">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-lime-400 flex items-center justify-center mb-8">
                    <i className="fa-solid fa-bolt text-black text-3xl"></i>
                </div>

                <h1 className="text-6xl font-bold">
                    About <span className="text-lime-400">SkyMart</span>
                </h1>

                <p className="text-neutral-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
                    SkyMart is a next-generation e-commerce platform built to
                    make online shopping fast, simple and enjoyable for everyone.
                </p>

            </section>

            {/* Stats */}

            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                <div className="border border-neutral-700 rounded-2xl p-8 text-center hover:border-lime-400 transition">
                    <Package className="mx-auto text-lime-400 mb-4" />
                    <h2 className="text-4xl font-bold">20K+</h2>
                    <p className="text-neutral-500 mt-2">Products</p>
                </div>

                <div className="border border-neutral-700 rounded-2xl p-8 text-center hover:border-lime-400 transition">
                    <Users className="mx-auto text-lime-400 mb-4" />
                    <h2 className="text-4xl font-bold">50K+</h2>
                    <p className="text-neutral-500 mt-2">Happy Customers</p>
                </div>

                <div className="border border-neutral-700 rounded-2xl p-8 text-center hover:border-lime-400 transition">
                    <Star className="mx-auto text-lime-400 mb-4" />
                    <h2 className="text-4xl font-bold">4.9</h2>
                    <p className="text-neutral-500 mt-2">Average Rating</p>
                </div>

                <div className="border border-neutral-700 rounded-2xl p-8 text-center hover:border-lime-400 transition">
                    <Truck className="mx-auto text-lime-400 mb-4" />
                    <h2 className="text-4xl font-bold">99%</h2>
                    <p className="text-neutral-500 mt-2">On-Time Delivery</p>
                </div>

            </section>

            {/* Story */}

            <section className="border border-neutral-700 rounded-3xl p-10 mt-16">

                <h2 className="text-4xl font-bold mb-8">
                    Our Story
                </h2>

                <div className="space-y-6 text-neutral-400 leading-8 text-lg">

                    <p>
                        SkyMart began as a passion project with one simple mission:
                        create an online shopping experience that is fast,
                        beautiful and easy to use.
                    </p>

                    <p>
                        We believe shopping should never feel complicated.
                        That's why we focus on clean design, quality products
                        and a seamless checkout experience.
                    </p>

                    <p>
                        Today, SkyMart offers products across electronics,
                        fashion, jewellery and everyday essentials while
                        constantly improving the experience for every customer.
                    </p>

                </div>

            </section>

            {/* Why Choose Us */}

            <section className="mt-16">

                <h2 className="text-4xl font-bold mb-8">
                    Why Choose SkyMart?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-neutral-900 rounded-2xl border border-neutral-700 p-8 hover:border-lime-400 transition">
                        <h3 className="text-2xl font-semibold mb-3 ">
                            Fast Delivery
                        </h3>

                        <p className="text-neutral-400">
                            Quick and reliable shipping across the country.
                        </p>
                    </div>

                    <div className="bg-neutral-900 rounded-2xl border border-neutral-700 p-8 hover:border-lime-400 transition">
                        <h3 className="text-2xl font-semibold mb-3">
                            Premium Products
                        </h3>

                        <p className="text-neutral-400">
                            Carefully selected products from trusted brands.
                        </p>
                    </div>

                    <div className="bg-neutral-900 rounded-2xl border border-neutral-700 p-8 hover:border-lime-400 transition">
                        <h3 className="text-2xl font-semibold mb-3">
                            Secure Payments
                        </h3>

                        <p className="text-neutral-400">
                            Safe transactions with multiple payment options.
                        </p>
                    </div>

                    <div className="bg-neutral-900 rounded-2xl border border-neutral-700 p-8 hover:border-lime-400 transition">
                        <h3 className="text-2xl font-semibold mb-3">
                            Customer First
                        </h3>

                        <p className="text-neutral-400">
                            Dedicated support whenever you need help.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default About;