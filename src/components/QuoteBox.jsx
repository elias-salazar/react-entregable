import quotes from "../quotes.json";
import React from "react";
import BtnQuote from "./BtnQuote";
import { useState } from "react";

const QuoteBox = () => {
  const colors = [
    "#29424B",
    "#121D20",
    "#1B890F",
    "#2B2B2B",
    "#4E4E4E",
    "##5C38BF",
    "#BFBFBF",
    "#3E202B",
    "#140A0E",
    "#C8694A",
    "#333333",
    "#000000",
    "#E05858",
    "#136464",
    "#B54747",
  ];
  const maxC = colors.length;
  const iC = Math.floor(Math.random() * maxC);
  const [indexColor, setIndexColor] = useState(iC);

  const max = quotes.length;
  const iQ = Math.floor(Math.random() * max);
  const [index, setIndex] = useState(iQ);
  const randomQuote = () => {
    const rdmQuote = Math.floor(Math.random() * max);
    const rdmColor = Math.floor(Math.random() * maxC);
    setIndex(rdmQuote);
    setIndexColor(rdmColor);
  };
  let color = colors[indexColor];
  document.body.style.backgroundColor = colors[indexColor];
  return (
    <div className="cardQuote">
      <h4 style={{ color: colors[indexColor] }}>
        <i className="fa-solid fa-quote-left"></i>
        {quotes[index].quote}
      </h4>
      <p style={{ color: colors[indexColor] }}>{quotes[index].author}</p>
      <BtnQuote rdmQuote={randomQuote} color={color} />
    </div>
  );
};

export default QuoteBox;
