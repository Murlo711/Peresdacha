import React from 'react';

   const StarRating = ({ rating }) => {
       const roundedRating = Math.round(rating);
       const stars = [];

       for (let i = 1; i <= 5; i++) {
           stars.push(
               <span key={i} className={i <= roundedRating ? 'filled-star' : 'empty-star'}>
                   ★
               </span>
           );
       }

       return <div>{stars}</div>;
   };

   export default StarRating;