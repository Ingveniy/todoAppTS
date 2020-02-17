import React from "react";
import { INavbar } from "../interfaces";
const Navbar: React.FC<INavbar> = ({ children }) => {
  return (
    <ul className='navbar'>{children.map((item): React.ReactNode => item)}</ul>
  );
};
export default Navbar;
