import React from "react";

import { Dropdown } from "react-bootstrap";

const DropdownMenu = () => {
  const dropdownItem = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <>
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
            <Dropdown.Item className="main__dropdown-item" href="#/action-1">
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
