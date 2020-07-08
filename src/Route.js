import React from 'react';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Productitems from "./Components/Productitem";
import NavBar from "./Components/NavBar";

export default function MyRou() {
    return (
        <div>
            <Router>
            <NavBar/>
                <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/about" component={About}/>
                 <Route path="/product" component={Product}/>
                 <Route path="/productitem/:id" component={Productitems}/>
                 <Route path="*" component={()=><h2>404 Not Found!</h2>}/>   
   
                </Switch>
            </Router>
        </div>
    )
}
