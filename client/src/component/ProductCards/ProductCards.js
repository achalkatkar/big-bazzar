import React from "react";
import "./ProductCards.css";

function ProductCards({id, name, price, description, image}) {
    return(
        <div className="product-card">
           <img src={image} alt={name} className="product-card-image"/>
           <h2>{name}</h2>
           <h1>₹{price}</h1>
           <p>{description}</p>
           <button className="btn-buy-now">Buy Now</button>

           
        </div>
    )
}

export default ProductCards