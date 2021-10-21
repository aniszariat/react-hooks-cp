import React, { useState } from "react";
import "./StarRate.css";

const StarRating = () => {  
  const [rating, setRating] = useState(0)
    return (
      <div className="star-rating">
    <p>Hello World</p>
    {[...Array(5)].map((star) => {        
      return (         
        <span className="star">&#9733;</span>        
      );
    })}
    <br></br>
    <br></br>
    {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star" precision={0.5}>&#9733;</span>
          </button>
        );
      })}
      <h1>the rating is {rating}</h1>
  </div>);
};

export default StarRating;