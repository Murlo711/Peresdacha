import React, { useEffect, useState } from 'react';
   import { Link } from 'react-router-dom';
   import StarRating from './StarRating';

   const ProductsPage = () => {
       const [products, setProducts] = useState([]);

       useEffect(() => {
           fetch('https://fakestoreapi.com/products')
               .then(response => response.json())
               .then(data => setProducts(data))
               .catch(error => console.error('Error fetching products:', error));
       }, []);

       return (
           <div className="products-grid">
               {products.map(product => (
                   <div key={product.id} className="product-card">
                       <Link to={`/product/${product.id}`}>
                           <h3>{product.title}</h3>
                       </Link>
                       <StarRating rating={product.rating.rate} />
                   </div>
               ))}
           </div>
       );
   };

   export default ProductsPage;