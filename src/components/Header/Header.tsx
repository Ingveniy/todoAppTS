import React from "react";

import Navbar from "../Navbar";
import NavItem from "../Navbar/NavItem";

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__logo'>Todo app</div>
      <Navbar>
        <NavItem>Page 1</NavItem>
        <NavItem>Page 2</NavItem>
      </Navbar>
    </div>
  );
};

export default Header;
