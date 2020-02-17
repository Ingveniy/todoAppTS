import React from "react";

const NavItem: React.FC<React.ReactNode> = ({ children }) => {
  return <li className='navItem'>{children}</li>;
};
export default NavItem;
