import { Component } from "react";
import styled from "styled-components";
import MyHead from "./MyHeaderOne";
import "./myCss.module.css";
import Sept from "./Sept";
import Btn from "./CustomBtn";
const success = {
  backgroundColor: "purple",
  color: "white",
};
const red = {
  backgroundColor: "red",
  color: "white",
};
const blue = {
  backgroundColor: "blue",
  color: "white",
};
const bigoo = {
  //backgroundColor: "linear-gradient({green} , yellow)",
  color: "white",
};
class Form extends Component {
  state = {
    color: "purple",
    fontSize: "15em",
  };
  handleColor = (e) => {
    this.setState({ color: e });
  };
  changeClick = () => {
    alert("Vous etes bien une petite sauce ? non");
  };
  changeClick2 = () => {
    alert("Victoire");
  };
  render() {
    const Title = styled.h1`
      color: red;
      font-size: 80px;
    `;
    const Button = styled.button`
      background: black;
      color: #ffffff;
      padding: 12px 13px;
      font-size: 15px;
    `;

    return (
      <div>
        <MyHead></MyHead>
        <Title>commentaire1</Title>
        <button className="btn btn-primary">valider</button>
        <Button>Valider 3</Button>
        <Button onClick={() => this.handleColor("red")}>
          je veux changer le style de "je suis la couleur ..."
        </Button>
        <p style={{ color: this.state.color, fontSize: this.state.fontSize }}>
          je suis la couleur {this.state.color}
        </p>
        <Sept changeColorSept={this.handleColor} leState={this.state}></Sept>
        <Btn btnStyle={success} handleClick={this.changeClick}>
          Cliquez ici
        </Btn>
        <Btn btnStyle={red} handleClick={this.changeClick2}>
          ah ok j'ai compris
        </Btn>
        <Btn btnStyle={blue} handleClick={this.changeClick}>
          mais vraiment
        </Btn>
        <Btn btnStyle={bigoo} handleClick={this.changeClick}>
          champion
        </Btn>
      </div>
    );
  }
}
export default Form;
