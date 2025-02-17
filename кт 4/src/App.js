import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import ProductsPage from './ProductsPage';
   import ProductPage from './ProductPage';
   import NotFoundPage from './NotFoundPage';

   const App = () => {
       return (
           <Router>
               <Routes>
                   <Route path="/products" element={<ProductsPage />} />
                   <Route path="/product/:id" element={<ProductPage />} />
                   <Route path="*" element={<NotFoundPage />} />
               </Routes>
           </Router>
       );
   };

   export default App;
