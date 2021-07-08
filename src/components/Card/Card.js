import React, { useEffect, useState } from "react";

import Loader from "../Loader/Loader";

import "./Card.scss";
const Card = ({ query, region, regionLoading }) => {
  const [countries, setCountries] = useState([]);
  //   const [country, setCountry] = useState({});

  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);

    const response = await fetch(`https://restcountries.eu/rest/v2/all`);

    const data = await response.json();
    setLoading(false);

    setCountries(data);
  };

  useEffect(() => {
    if (query) {
      const fetchSingleCountry = async () => {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${query}`
        );

        const data = await response.json();

        setCountries(data);

      };

      fetchSingleCountry();
    }
  }, [query, region]);

  useEffect(() => {
    if (region) {
      setCountries(region);
    }
  }, [region]);

  return (
    <div className="container">
      {(loading || regionLoading) ? (
        <Loader />
      ) : (
        countries.map((country) => (
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
        ))
      )}
    </div>
  );
};

export default Card;
