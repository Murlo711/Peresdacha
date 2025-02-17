import React, { useEffect, useState } from 'react';
   import { useParams, useNavigate } from 'react-router-dom';
   import StarRating from './StarRating';

   const ProductPage = () => {
       const { id } = useParams();
       const [product, setProduct] = useState(null);
       const navigate = useNavigate();

       useEffect(() => {
           fetch(`https://fakestoreapi.com/products/${id}`)
               .then(response => response.json())
               .then(data => setProduct(data))
               .catch(error => console.error('Error fetching product:', error));
       }, [id]);

       if (!product) return <div>Loading...</div>;

       return (
           <div className="product-detail">
               <h2>{product.title}</h2>
               <img src={product.image} alt={product.title} />
               <p>{product.description}</p>
               <h3>Price: ${product.price}</h3>
               <StarRating rating={product.rating.rate} />
               <button onClick={() => navigate(-1)}>Назад</button>
           </div>
       );
   };

   export default ProductPage;