import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const currentPageStyle = {
  fontWeight: "bold"
}

class BeerCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: this.props.data,
      currentPage: 1,
      beersPerPage: 8,
    }
    this.handleClick = this.handleClick.bind(this);
    this.sortBeersByName = this.sortBeersByName.bind(this);
    this.sortBeersByAbv = this.sortBeersByAbv.bind(this);
  }
  handleClick(e) {
    this.setState({currentPage: Number(e.target.id)});
  }
  sortBeersByName() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({ beers : sorted })
  }

  sortBeersByAbv() {
    const sorted = [].concat(this.state.beers).sort((a,b) => (a.abv > b.abv) ? 1 : ((b.abv > a.abv) ? -1 : 0));
    this.setState({ beers : sorted })
  };
  render() {
    const { currentPage, beersPerPage, beers } = this.state;
    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(beers.length / beersPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      if (number === currentPage) {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
            style={currentPageStyle}
          >
            {number}
          </li>
        )
      }
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    const renderBeers = currentBeers.map((beer) => {
      return <Beer className="beer-card"
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
        />;
    })
    return (
      <div>
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
        <div className="container">
          <div className="row">
            {renderBeers}
          </div>
          <div className="paginate-container">
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(BeerCollection);
