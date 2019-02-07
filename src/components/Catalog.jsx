import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";
import BeerCollection from './BeerCollection';


class Catalog extends Component{
  constructor(props) {
    super(props);
  };

  render(){
    return(
      <div>
        <h3>The FitRankings Beer Catalog</h3>
        <p id="header-text">Check out some of our personal favorite beers!</p>
        <BeerCollection />
      </div>
    );
  }
}

// <div className='row'>
//   <div className='col-sm'>
    // <div className="card shadow p-3 mb-5 bg-white rounded">
    //   <div className="card-body">
    //     <h2 className="card-title">Hello, FitRankings...</h2>
    //     <div className="card-text">Check out this <Beer/>!</div>
    //   </div>
    // </div>
//   <div className="col-sm">
//     <div className="card shadow p-3 mb-5 bg-white rounded">
//       <div className="card-body">
//         <h2 className="card-title">Hello, FitRankings...</h2>
//         <div className="card-text">Check out this <Beer/>!</div>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm">
//     <div className="card shadow p-3 mb-5 bg-white rounded">
//       <div className="card-body">
//         <h2 className="card-title">Hello, FitRankings...</h2>
//         <div className="card-text">Check out this <Beer/>!</div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//

export default hot(module)(Catalog);
