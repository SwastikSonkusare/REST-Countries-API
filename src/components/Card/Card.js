import React, { useEffect, useState } from "react";

import "./Card.scss";
const Card = ({ query }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);

    setCountries(await response.json());
    console.log(countries);
  };

  if (query) {
    const response = fetch(`https://restcountries.eu/rest/v2/name/${query}`);

    setCountry(response);
  }

  return (
    <div className="container">
      {countries.map((country) => (
        <div className="card">
          <img
            className="card__image"
            src={country.flag}
            alt={country.flag}
          ></img>

          <div className="card__details">
            <h2 className="card__name">{country.name}</h2>
            <span className="card__population">
              <span className="card__population--name">Population: </span>
              <span className="card__population--number">
                {country.population}
              </span>
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
      ))}
    </div>
  );
};

export default Card;
