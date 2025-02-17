import React, { useEffect, useState } from "react";
import Product from "./Product";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        };

        fetchData();
    }, []);

    const handleDoubleClick = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <div className="product-grid">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        onDoubleClick={() => handleDoubleClick(product.id)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;

