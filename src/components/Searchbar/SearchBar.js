import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { Dropdown } from "react-bootstrap";



import CountryList from "../CountryList/CountryList";

import "./SearchBar.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState([]);
  const [regionLoading, setRegionLoading] = useState();

  const dropdownItem = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("")
  };


  const filterHandler = async (item) => {
    setRegionLoading(true)

    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${item}`
    );

    const data = await response.json();
    setRegionLoading(false)
    setRegion(data)
  }


  return (
    <>
      <main className="main">
        <div className="main__search">
          <form className="main__search-container" onSubmit={submitHandler}>
            <FontAwesomeIcon
              size="lg"
              icon={faSearch}
              className="main__search-icon"
            />
            <input
              type="text"
              className="main__input"
              placeholder="Search for a country..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>

            <button className="main__button" type="submit">
              Search
            </button>
          </form>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="main__dropdown"
              as="div"
            >
              Filter by Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdownItem.map((item) => (
                <Dropdown.Item className="main__dropdown-item" onClick={() => filterHandler(item)}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </main>
      <CountryList query={query} region={region} regionLoading={regionLoading} setQuery={setQuery} />
    </>
  );
};

export default SearchBar;
