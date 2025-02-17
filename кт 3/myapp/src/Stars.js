import React from "react";
import './Stars.css';

const Stars = ({ rating }) => {
    const filledStars = Math.round(rating);

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`fa fa-star${index < filledStars ? ' active' : ''}`}></span>
            ))}
        </div>
    );
}

export default Stars;

