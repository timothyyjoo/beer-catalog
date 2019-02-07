import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';
import Service from '../services/Service'
import ReactPaginate from 'react-paginate';


const service = new Service

class BeerCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers : null,
      isLoading: true,
    };
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
  }
  componentDidMount() {
    service.fetchBeers();
    const beers  = service.beers
    this.setState({ beers : beers, isLoading: false })
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
    const {isLoading} = this.state
    if (isLoading) {
      return <h1>Loading ...</h1>;
      }
    const beers = this.state.beers
    return (
      <div className="container">
        <button onClick={this.sortBeersByAbv}> Sort By Abv</button>
        <button onClick={this.sortBeersByName}>Sort By Name</button>
        <div className="row">
          {beers.map(beer => (
            <Beer className="beer-card"
              key={beer.id}
              name={beer.name}
              tagline={beer.tagline}
              date={beer.date}
              desc={beer.desc}
              image={beer.image}
              abv={beer.abv}
              ibu={beer.ibu}
              yeast={beer.yeast}
              food={beer.food}
              tip={beer.tip}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default hot(module)(BeerCollection);
