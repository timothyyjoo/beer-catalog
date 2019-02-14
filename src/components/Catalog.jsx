import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Service from '../services/Service'
import Pagination from './Pagination';
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
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
    this.fetchSearchedBeers = this.fetchSearchedBeers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    service.fetchBeers();
    let beers  = service.beers
    console.log('beers', beers)
    this.setState({ beers: beers, isLoading: false})
  }

  sortBeersByName() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({ beers : sorted })
  }

  sortBeersByAbv() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.abv > b.abv) ? 1 : ((b.abv > a.abv) ? -1 : 0));
    this.setState({ beers : sorted })
  };

  fetchSearchedBeers(term) {
    this.setState({ beers : null })
    service.fetchSearchedBeers(term)
    const beers = service.beers
    this.setState({ beers: beers })
  }
//for search functionality
  handleChange(e) {
    e.preventDefault()
    let input = e.target.value.replace(/ /g,"_")
    this.setState({ input : input})
  }
  handleSubmit(e) {
    e.preventDefault()
    this.fetchSearchedBeers(this.state.input)
  }
///for pagination
  // handlePageClick(data) {
  //   let selected = data.selected;
  //   let offset = Math.ceil(selected * this.props.perPage)
  //
  //   this.setState({ offset: offset}, () => {service.fetchBeers(this.state.offset, perPage)})
  // }

  render(){
    const { isLoading, beers} = this.state

    return(
      <div>
        <h3>The FitRankings Beer Catalog</h3>
        <p id="header-text">Check out some of our personal favorite beers!</p>
        <div className="header-style">
            <button onClick={this.sortBeersByAbv}> Sort By Abv</button>
            <button onClick={this.sortBeersByName}>Sort By Name</button>
        </div>
        <div className="form-style">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                className="header-input-form"
                id="search"
                placeholder= "Search Beers"
                type='text'
                autoComplete="off"
                onChange={this.handleChange}/>
            </label>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
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
