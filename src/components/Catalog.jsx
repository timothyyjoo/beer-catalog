import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';
import Service from '../services/Service'


const service = new Service


class Catalog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      beers : null,
      isLoading: true,
    };
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
    this.fetchNewBeerSet = this.fetchNewBeerSet.bind(this);
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
  };

  fetchNewBeerSet(val) {
    service.fetchNewBeerSet(val)
    const beers = service.beers
    this.setState({ beers : beers })
  }

  render(){
    const {isLoading} = this.state
    if (isLoading) {
      return <h1>Loading ...</h1>;
      }
    const beers = this.state.beers
    console.log('beers', this.state.beers)
    return(
      <div>
        <h3>The FitRankings Beer Catalog</h3>
        <p id="header-text">Check out some of our personal favorite beers!</p>
          <div className="container">
            <button onClick={this.sortBeersByAbv}> Sort By Abv</button>
            <button onClick={this.sortBeersByName}>Sort By Name</button>
            <button onClick={() => this.fetchNewBeerSet(1)}>Page 1</button>
            <button onClick={() => this.fetchNewBeerSet(2)}>Page 3</button>
            <button onClick={() => this.fetchNewBeerSet(3)}>Page 3</button>
            <button onClick={() => this.fetchNewBeerSet(4)}>Page 4</button>
            <button onClick={() => this.fetchNewBeerSet(5)}>Page 5</button>
            <button onClick={() => this.fetchNewBeerSet(6)}>Page 6</button>
            <button onClick={() => this.fetchNewBeerSet(7)}>Page 7</button>
            <button onClick={() => this.fetchNewBeerSet(8)}>Page 8</button>
            <button onClick={() => this.fetchNewBeerSet(9)}>Page 9</button>
            <button onClick={() => this.fetchNewBeerSet(10)}>Page 10</button>
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
      </div>
    );
  };
}
export default hot(module)(Catalog);
