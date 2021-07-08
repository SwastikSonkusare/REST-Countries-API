import React from "react";

import { Dropdown } from "react-bootstrap";

const DropdownMenu = () => {

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
            <Dropdown.Item className="main__dropdown-item">
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
