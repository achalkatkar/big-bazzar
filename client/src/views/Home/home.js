import React, { useEffect, useState } from "react";
import "./home.css";
import axios from 'axios';
import ProductCards from "../../component/ProductCards/ProductCards";


import "./home.css";

function Home() {
    const [Products, setProducts] = useState([]);
    
    const loadProducts = async () =>{
        const response = await axios.get("/products");
        setProducts(response?.data?.data);
    }

    useEffect(()=> {
       loadProducts();
    }, []);
    
    return(
        <div>
            <h1 className="text-center">All Products</h1>

           <div className="product-container">
              
            {
                Products?.map((product, index)=>{
                    const {_id, name, price, description, image} = product;

                    return(<ProductCards key={index} id={ _id} name={name} price={price} description={description} image={image}/>)
                })
            }

          </div>
        </div>
    )
}

export default Home