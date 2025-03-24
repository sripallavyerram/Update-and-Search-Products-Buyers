import React, { useEffect, useState } from "react";
import { getProducts, searchProducts } from "./api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleSearch = async () => {
    const data = await searchProducts(search);
    setProducts(data);
  };

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
