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
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
  };
  componentDidMount() {
    beerService.getBeers();
    this.setState({ beers : beerService.beers })
  }

  sortBeersByName() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({ beers : sorted })
  }

  sortBeersByAbv() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.abv > b.abv) ? 1 : ((b.abv > a.abv) ? -1 : 0));
    this.setState({ beers : sorted })
  }

  render(){
    console.log("beers", this.state.beers)
    return(
      <div className="catalog">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h2 className="card-title" onClick={this.sortBeersByAbv}>Hello, FitRankings...</h2>
            <div className="card-text" onClick={this.sortBeersByName}>Check out this <Beer/>!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Catalog);
