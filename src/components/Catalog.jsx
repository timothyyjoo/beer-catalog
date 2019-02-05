import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';
import BeerService from '../services/beerService'

const beerService = new BeerService

class Catalog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      beers : null
    };
  };
  componentDidMount() {
    beerService.getBeers();
    this.setState({ beers : beerService.beers })
  }
  render(){
    console.log(this.state.beers)
    return(
      <div className="catalog">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h2 className="card-title">Hello, FitRankings...</h2>
            <div className="card-text">Check out this <Beer/>!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Catalog);
