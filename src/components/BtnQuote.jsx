import React from "react";

const Colors = ({ rdmQuote, color }) => {
  return (
    <button
      style={{ background: color }}
      className="btnQuote"
      onClick={rdmQuote}
    >
      <i className="fa-solid fa-angle-right"></i>
    </button>
  );
};

export default Colors;
