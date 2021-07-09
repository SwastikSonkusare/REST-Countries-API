import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

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
    <div className="details">
      <button className="details__back">
        <a href="/">
          <span>&#8592;</span> Back
        </a>
      </button>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="details__main">
            {details.map((c) => {
              const {
                name,
                flag,
                region,
                subregion,
                topLevelDomain,
                currencies,
                capital,
                borders,
                languages,
                nativeName,
                population,
              } = c;

              const lang = [];
              languages.map((item) => lang.push(item.name));

              console.log(lang);

              const array1 = [
                {
                  key: "Native Name",
                  value: nativeName,
                },
                {
                  key: "Population",
                  value: population,
                },
                {
                  key: "Region",
                  value: region,
                },
                {
                  key: "Sub Region",
                  value: subregion,
                },
                {
                  key: "Captial",
                  value: capital,
                },
              ];
              const array2 = [
                {
                  key: "Top Level Domain",
                  value: topLevelDomain[0],
                },
                {
                  key: "Currencies",
                  value: currencies[0].name,
                },
                {
                  key: "Languages",
                  value: lang.join(", "),
                },
              ];

              return (
                <>
                  <div className="details__left-section">
                    <img className="details__image" src={flag} alt={flag}></img>
                  </div>
                  <div className="details__right-section">
                    <h1 className="header__heading">{name}</h1>
                    <div className="details__section">
                      <div className="details__section-1">
                        {array1.map((item) => (
                          <>
                            <span className="content">
                              <span className="content__key">{item.key}: </span>
                              <span className="content__value">
                                {item.value}
                              </span>
                            </span>
                          </>
                        ))}
                      </div>
                      <div className="details__section-2">
                        {array2.map((item) => (
                          <>
                            <span className="content">
                              <span className="content__key">{item.key}: </span>
                              <span className="content__value">
                                {item.value}
                              </span>
                            </span>
                          </>
                        ))}
                      </div>
                    </div>

                    <div className="borders">
                      <h1 className="content__key">Border Countries: </h1>
                      <div>
                        {borders.map((border) => (
                          <>
                            <button className="borders__value">
                              <Link>{border}</Link>
                            </button>
                          </>
                        ))}
                      </div>
                    </div>
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
