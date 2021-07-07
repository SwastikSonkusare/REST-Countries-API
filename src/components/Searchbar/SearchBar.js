import React from "react";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import './SearchBar.scss'

const SearchBar = () => {
  const dropdownItem = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <main className="main">
      <div className="main__search">
        <div className="main__search-container">
          <FontAwesomeIcon
            size="lg"
            icon={faSearch}
            className="main__search-icon"
          />
          <input
            type="text"
            className="main__input"
            placeholder="Search for a country..."
          ></input>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="main__dropdown"
              id="dropdown-basic"
            >
              Filter by Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropdownItem.map((item) => (
                <Dropdown.Item
                  className="main__dropdown-item"
                  href="#/action-1"
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </main>
  );
};

export default SearchBar;
