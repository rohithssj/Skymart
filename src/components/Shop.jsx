import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { MyStore } from "../context/MyContext";

const Shop = ({ productsData }) => {
  const { cartItems } = useContext(MyStore);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const categories = [
    "all",
    ...new Set(productsData.map((item) => item.category)),
  ];

  let filteredProducts = productsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "ratingLow") {
    filteredProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  if (sort === "ratingHigh") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="max-w-7xl mx-auto p-5">

      {/* Search & Filters */}

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full md:w-80"
        />

        <div className="flex gap-4">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">Sort By</option>
            <option value="ratingHigh">High Rated</option>
            <option value="ratingLow">Low Rated</option>
            <option value="priceLow">Price Low → High</option>
            <option value="priceHigh">Price High → Low</option>
          </select>

        </div>

      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.length === 0 ? (
          <h1 className="text-3xl text-center col-span-full">
            No Products Found!!
          </h1>
        ) : (
          filteredProducts.map((elem) => {
            const inCart = cartItems.find((item) => item.id === elem.id);

            return (
              <ProductCard
                key={elem.id}
                products={elem}
                inCart={inCart}
              />
            );
          })
        )}

      </div>

    </div>
  );
};

export default Shop;