import React from "react";

const Btn = ({ children, handleClick, btnStyle }) => {
  const CustomBtn = {
    backgroundColor: "grey",
    border: "none",
    color: "green",
    fontsize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    display: "block",
    textdecoration: "none",
    borderRadius: "7px",
    margin: "5px auto",
  };
  return (
    <button style={{ ...CustomBtn, ...btnStyle }} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Btn;
