import React from "react";

const Roll = ({ number, handleClick }) => {
  return (
    <button 
      type="button"
      onClick={() => handleClick(number)}
    >
      {number}
    </button>
  );
};

export default Roll;
