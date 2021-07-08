import React from "react";

import './Card.scss';

const Card = ({ country }) => {
  return (
    <div className="card">
      <img className="card__image" src={country.flag} alt={country.flag}></img>

      <div className="card__details">
        <h2 className="card__name">{country.name}</h2>
        <span className="card__population">
          <span className="card__population--name">Population: </span>
          <span className="card__population--number">{country.population}</span>
        </span>
        <span className="card__region">
          <span className="card__region--name">Region: </span>
          <span className="card__region--number">{country.region}</span>
        </span>
        <span className="card__capital">
          <span className="card__capital--name">Capital: </span>
          <span className="card__capital--number">{country.capital}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
