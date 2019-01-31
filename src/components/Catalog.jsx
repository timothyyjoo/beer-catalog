import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';


class Catalog extends Component{
  render(){
    return(
      <div className="catalog">
        <h1>Hello, FitRankings...</h1>
        <h5>Check out this <Beer/>!</h5>
      </div>
    );
  }
}

export default hot(module)(Catalog);