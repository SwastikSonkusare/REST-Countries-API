import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import Card from "../Card/Card";
import DropdownMenu from "../Dropdown/Dropdown";

import "./SearchBar.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("")



  const submitHandler = (e) =>{
    e.preventDefault();
    setQuery(input)

    console.log(query)
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

            <button className="card__button" type="submit">Search</button>
          </form>

          <DropdownMenu />
        </div>
      </main>
      <Card query={query} />
    </>
  );
};

export default SearchBar;
