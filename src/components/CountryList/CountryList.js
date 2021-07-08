import React, { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import Card from '../Card/Card'

import "./CountryList.scss";
const Countries = ({ query, region, regionLoading, setQuery }) => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState();

  useEffect(() => {

     const fetchCountries = async () => {
    setLoading(true);

    const response = await fetch(`https://restcountries.eu/rest/v2/all`);

    const data = await response.json();
    setLoading(false);


    setCountries(data);
  };

    fetchCountries();
  }, []);

 
  useEffect(() => {
    if (query) {
      const fetchSingleCountry = async () => {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${query}`
        );

        const data = await response.json();

        setCountries(data);
        setQuery("")
      };

      fetchSingleCountry();
      
    };
  }, [query, region]);

  useEffect(() => {
    if (region) {
      setCountries(region);
    }
  }, [region])


  return (
    <div className="container">
      {(loading || regionLoading) ? (
        <Loader />
      ) : (
        countries.map((country) => (
          
          <Card country={country} />
        ))
      )}
    </div>
  );
};

export default Countries;
