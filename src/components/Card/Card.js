import React, { useEffect, useState } from "react";

import "./Card.scss";
const Card = () => {

    const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");

      setCountries(await response.json());
      console.log(countries);
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <div className="card">
            <img className="card__image" src={country.flag} alt={country.flag}></img>

            <h2 className="card__name">{country.name}</h2>
            <span className="card__population">Population: {country.population}</span>
            <span className="card__region">Region: {country.region}</span>
            <span className="card__capital">Capital: {country.capital}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
