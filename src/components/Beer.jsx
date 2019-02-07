import React from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";

const Beer = (props) => {
    return (
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h2 className="card-title">Hello, FitRankings...</h2>
          <div className="card-text">Check out this !</div>
        </div>
      </div>
    )
}


export default hot(module)(Beer);
