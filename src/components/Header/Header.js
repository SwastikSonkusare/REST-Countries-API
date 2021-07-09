import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/fontawesome-free-solid";

import "./Header.scss";

const Header = () => {

  // const themeToggler = () =>{

  //   const header = document.querySelector(".header");
  //   const main = document.querySelector(".main");
  //   const mainInput = document.querySelector(".main__input");
  //   const mainButton = document.querySelector(".main__button");
  //   const mainDropdown = document.querySelector(".main__dropdown");
    
  //   header.classList.toggle("dark-theme");
  //   document.body.classList.toggle("dark-theme");
  //   main.classList.toggle("dark-theme");
  //   mainInput.classList.toggle("dark-theme");
  //   mainButton.classList.toggle("dark-theme");
  //   mainDropdown.classList.toggle("dark-theme");
  // }



  return (
    <header className="header">
      <div className="header__left-section">
        <h1 className="header__heading">Where in the world?</h1>
      </div>
      {/* <button className="header__right-section" onClick={themeToggler}>
        <FontAwesomeIcon size="lg" icon={faMoon} />
        <span>Dark Mode</span>
      </button> */}
    </header>
  );
};

export default Header;
