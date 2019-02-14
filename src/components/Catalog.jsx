import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Service from '../services/Service'
import BeerCollection from './BeerCollection'

const service = new Service


class Catalog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      beers : [],
      input: '',
      isLoading: true,
    };
  }
  componentWillMount() {
    service.fetchBeers()
    console.log('beers', service.beers)
    this.setState({ beers: service.beers, isLoading: false})
  }

  render(){
    const { isLoading, beers} = this.state
    console.log('renderedbeers', beers)
    return(
      <div>
        <h3>The FitRankings Beer Catalog</h3>
        <p id="header-text">Check out some of our personal favorite beers!</p>
          {isLoading &&
             <h1>Loading ...</h1>
          }
          <BeerCollection data={this.state.beers}/>
        <div className="d-flex flex-row py-4 align-items-center">

        </div>
      </div>
    );
  };
}
export default hot(module)(Catalog);
