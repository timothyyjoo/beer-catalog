import React from "react";
import {hot} from "react-hot-loader";
import "../stylesheet.css";

const Beer = (props) => {
  let { name, tagline, date, desc, image, abv, ibu, yeast,food, tip} = props
  let foodList = food.map((food, index) =>
     <ul>
            <li key={index}>{food}</li>
          </ul>
      )
    return (
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className='card-title'>{tagline}</h5>
          <div className="beer-content">
            <img src={image} className="image"/>
            <ul className="beer-list">
              <li>Release Date: {date}</li>
              <li>ABV Content: {abv}</li>
              <li>IBU per Beer: {ibu}</li>
              <li>Yeast Content: {yeast}</li>
              <li>HomeBrew Tip: {tip}</li>
              <li>Pairs with: {foodList}</li>
            </ul>
          </div>
          <div className="beer-details">
              {desc}
          </div>
        </div>
      </div>
    )
}


export default hot(module)(Beer);
