import React from "react";
import "./myCss.module.css";
import styled from "styled-components";

const Sept = (props) => {
  const Title2 = styled.h1`
    color: yellow;
    font-size: 100px;
    background-color: greenyellow;
    border: solid black 5px;
  `;
  return (
    <div>
      <Title2>September</Title2>
      <button onClick={() => this.changeColorSept("green")}>
        Change Color
      </button>
      <p style={props.color}>2023</p>
      <h1>2023</h1>
    </div>
  );
};
export default Sept;
