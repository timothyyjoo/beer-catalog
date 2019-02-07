import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Service from '../services/Service'
import ReactPaginate from 'react-paginate';
import BeerCollection from './BeerCollection'

const service = new Service


class Catalog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      beers : null,
      input: '',
      isLoading: true,
      offset: 1
    };
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
    this.fetchSearchedBeers = this.fetchSearchedBeers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    service.fetchBeers(this.state.offset, this.props.perPage);
    let beers  = service.beers
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

  fetchSearchedBeers(term) {
    this.setState({ beers : null })
    service.fetchSearchedBeers(term)
    const beers = service.beers
    this.setState({ beers: beers })
  }

  handleChange(e) {
    e.preventDefault()
    let input = e.target.value.replace(/ /g,"_")
    this.setState({ input : input})
  }
  handleSubmit(e) {
    e.preventDefault()
    this.fetchSearchedBeers(this.state.input)
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage)

    this.setState({ offset: offset}, () => {service.fetchBeers(this.state.offset, perPage)})
  }
  render(){
    const {isLoading} = this.state
    const {beers, input} = this.state
    return(
      <div>
        <h3>The FitRankings Beer Catalog</h3>
        <p id="header-text">Check out some of our personal favorite beers!</p>
          {isLoading &&
             <h1>Loading ...</h1>
          }
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
          <BeerCollection data={this.state.beers}/>
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          />
      </div>
    );
  };
}
export default hot(module)(Catalog);
