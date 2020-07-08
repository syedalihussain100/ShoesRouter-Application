import React from 'react';
import {useParams} from "react-router-dom";
import Shoes from "../Shoes.json";

export default function Productitems() {
    const { id } = useParams();
    const very = Shoes[id]
    if(!very) return<h1>Product Not Found</h1>
    return (
        <div>
           <h1>Welcome To ProductItems!</h1>
              
              <div 
                       className="link">
                          <h4>{very.name}</h4>
                          <img src={very.img} alt="Shoes-images" height={150}/>
                      </div>    
        </div>
    )
}
