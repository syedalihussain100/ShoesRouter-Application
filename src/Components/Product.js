import React from 'react';
import {Link} from "react-router-dom";
import Shoes from "../Shoes.json";

export default function Product() {
    return (
        <div>
         <h1>Welcome Product!</h1>
         <div className="Productcontainer">
           {Object.keys(Shoes).map(Keyname=>{
               const shoes = Shoes[Keyname];
               return(
                  <Link  
                    key={Keyname}
                    className="link"
                to={`/productitem/${Keyname}`}>
                   <h4>{shoes.name}</h4>
                   <img src={shoes.img} alt="Shoes Images" height="150"/>
               </Link>)
           })}  
         </div>   
        </div>
    )
}
