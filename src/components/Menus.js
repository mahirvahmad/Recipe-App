import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Hero from "./Hero";
import Header from './Header'
import SpecialDishes from "./SpecialDishes";
import React, { createContext, useEffect, useState } from "react";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";

function Menus() {
  return (
    <div>
      <Router>
        <Header/>
        <Hero />

        <Switch>
          //Page 1
          <Route exact path='/'>
            <AllMenus>
              <SpecialDishes />
              <FilteredDishes />
            </AllMenus>
          </Route>
          //Page 2
          <Route path="/checkout" component={Checkout} >
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menus;
