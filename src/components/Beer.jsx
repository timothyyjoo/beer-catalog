import React from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";

const Beer = (props) => {
  let { name, tagline, date, desc, image, abv, ibu, yeast,food, tip} = props
  console.log('image', image)
    return (
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <div className="beer-content">
          <img src={image} className="image"/>
            {tagline}
            {date}
            {desc}
            {abv}
            {ibu}
            {yeast}
            {food}
            {tip}
          </div>
        </div>
      </div>
    )
}


export default hot(module)(Beer);
