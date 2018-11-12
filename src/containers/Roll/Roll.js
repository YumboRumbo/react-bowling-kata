import React from "react";

const Roll = ({ number, handleRoll }) => {
  return (
    <button 
      type="button"
      onClick={() => handleRoll(number)}
    >
      {number}
    </button>
  );
};

export default Roll;
