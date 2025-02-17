import React from 'react';
   import { Link } from 'react-router-dom';

   const NotFoundPage = () => {
       return (
           <div>
               <h2>Страница не найдена</h2>
               <Link to="/products">Вернуться к товарам</Link>
           </div>
       );
   };

   export default NotFoundPage;