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
      collection : null
    }
  }
  render() {
    let beerList = this.props.data.map(beer => {
    return  <Beer className="beer-card"
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
    })
    return (
      <div className="container">
        <div className="row">
          {beerList}
        </div>
      </div>
    )
  }
}

export default hot(module)(BeerCollection);
