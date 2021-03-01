import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

let numA = genNumber();
let numB = genNumber();

let sum = parseInt(prompt(`jaki jest wynik dodawania liczby ${numA} i ${numB}?`))

let jsx;

const success = {
    backgroundColor : "green"
}


const fail = {
    backgroundColor: "red"
}




if (sum === numA + numB) {
    jsx = <div style={success}>Odpowiedź poprawna</div>
} else {
    jsx = <div style={fail}>Odpowiedź nieprawidłowa</div>
}

ReactDOM.render(
    jsx,
    document.getElementById("app")
);
