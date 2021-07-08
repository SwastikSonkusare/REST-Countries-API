import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./CountriesDetails.scss";

const CountryDetails = () => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState();
  const { name } = useParams();

  console.log(name);

  let result;

  useEffect(() => {
    if (name) {
      searchByName();
    }
  }, [name]);

  const searchByName = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    );

    //   await setDetails(data);

    console.log(data[0]);
    await setDetails(JSON.parse(data[0]));
    console.log(`the answer: ${details}`);
    setLoading(false);
  };

  return (
    <div className="details__container">
      <button className="details__back">
        <a href="/">Back</a>
      </button>

      {loading ? (
        "Loading..."
      ) : (
        <div className="details__main">
          <div className="details__left-section">
            {/* <img className="details__image">{country.flag}</img> */}
          </div>
          <div className="details__right-section"></div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
