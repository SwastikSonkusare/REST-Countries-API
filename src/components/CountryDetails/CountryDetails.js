import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./CountriesDetails.scss";

const CountryDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();


  useEffect(() => {
    const searchByName = async () => {
      setLoading(true);

      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      );
      
      const country = await response.json();
      setDetails(country);
      setLoading(false);

    };

    searchByName();
  }, []);

  return (
    <div className="details__container">
      <button className="details__back">
        <a href="/">Back</a>
      </button>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="details__main">
            {details.map((c) => {
              const { name, flag, numericCode } = c;

              return (
                <>
                  <div className="details__left-section">
                    <img
                      className="details__image"
                      src={flag}
                      alt={flag}
                    ></img>
                    
                  </div>
                  <div className="details__right-section">
                  <h1>{name}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
