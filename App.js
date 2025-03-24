import React, { useEffect, useState } from "react";

function App() {
    const [buyers, setBuyers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/buyers")
            .then(response => response.json())
            .then(data => setBuyers(data))
            .catch(error => console.error("Error fetching buyers:", error));

        fetch("http://localhost:5001/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div>
            <h1>Buyers List</h1>
            <ul>
                {buyers.map(buyer => (
                    <li key={buyer.id}>
                        {buyer.name} - {buyer.email} ({buyer.location})
                    </li>
                ))}
            </ul>

            <h1>Products List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price} ({product.category})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
