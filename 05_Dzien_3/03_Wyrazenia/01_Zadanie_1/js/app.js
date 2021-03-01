import React from "react";
import ReactDOM from "react-dom";

let a = parseFloat(prompt("podaj pierwszą liczbę"));
let b = parseFloat(prompt("podaj drugą liczbę"));

ReactDOM.render(
    <div>{a+b}</div>,
document.getElementById("app")
)
;
