import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import Beer from './Beer';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

class BeerCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: this.props.data,
      currentPage: 1,
      beersPerPage: 8,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({currentPage: Number(e.target.id)});
  }
  render() {
    const { currentPage, beersPerPage, beers } = this.state;
    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beers;
    const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(beers.length / beersPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
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
    )
  }
}

export default hot(module)(BeerCollection);
