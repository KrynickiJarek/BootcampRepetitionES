import React from "react";
import ReactDOM from "react-dom";

let borderColor = prompt("jaki kolor ramki wybierasz (red, green, blue)?")

let jsx;

const correctColor = {
    width: "100px",
    height: "100px",
    border: `5px solid ${borderColor}`
}

if (borderColor === "red" || borderColor === "blue" || borderColor === "green") {
    jsx = <div style={correctColor}></div>
} else {
    jsx = <div>Nieprawidłowy kolor</div>
}


ReactDOM.render(
    jsx,
    document.getElementById("app")
);
