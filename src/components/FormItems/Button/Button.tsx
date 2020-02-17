import React from "react";
import { IButton } from "../../interfaces";
const Button: React.FC<IButton> = ({ title, onClick }) => {
  return (
    <button
      className='button'
      type='button'
      onClick={e => {
        onClick(e);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
