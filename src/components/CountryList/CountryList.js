import React, { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import Card from '../Card/Card'

import Pagination from "../Pagination/Pagination";

import "./CountryList.scss";
const Countries = ({ query, region, regionLoading, setQuery }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(15);

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

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

 
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
    <>
    <div className="container">
      {(loading || regionLoading) ? (
        <Loader />
      ) : (
        currentCountries.map((country) => (
          
          <Card country={country} />
        ))
      )}

    </div>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
    </>
  );
};

export default Countries;
