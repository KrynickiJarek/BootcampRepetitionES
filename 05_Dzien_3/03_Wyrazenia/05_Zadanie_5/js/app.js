import React from "react";
import ReactDOM from "react-dom";

let a = parseFloat(prompt("podaj a"))
let calculation = prompt("podaj działanie matematyczna na a i b (+,-,*,/")
let b = parseFloat(prompt("podaj b"))

const calc = (a, b, calculation)=>{
    if (calculation === "+"){
        return <h1>{a+b}</h1>;
    } else if (calculation === "-"){
        return <h2>{a-b}</h2>;
    } else if (calculation === "*"){
        return <h3>{a*b}</h3>;
    } else if (calculation === "/"){
        return <h4>{a/b}</h4>;
    }
}



ReactDOM.render(
    <div>
        {calc(a, b, calculation)}
    </div>,
    document.getElementById("app")
);
