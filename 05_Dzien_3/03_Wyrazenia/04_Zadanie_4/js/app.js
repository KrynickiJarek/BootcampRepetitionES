import React from "react";
import ReactDOM from "react-dom";

let a = parseFloat(prompt("podaj a"))
let calculation = prompt("podaj działanie matematyczna na a i b (+,-,*,/")
let b = parseFloat(prompt("podaj b"))

let jsx;

switch (calculation){
    case "+":
        jsx =
            <h1>{a+b}</h1>;
        break;
    case "-":
        jsx =
            <h2>{a-b}</h2>;
        break;
    case "*":
        jsx =
            <h3>{a*b}</h3>;
        break;
    case "/":
        jsx =
            <h4>{a/b}</h4>;
        break;
    default:
        console.log("Złe wartości!");
}

ReactDOM.render(
  <div>
      {jsx}
  </div>,
  document.getElementById("app")
);
