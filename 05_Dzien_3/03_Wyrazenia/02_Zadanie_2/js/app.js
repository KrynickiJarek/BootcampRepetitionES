import React from "react";
import ReactDOM from "react-dom";


let yearOfBirth = parseFloat(prompt("Podaj swój rok urodzenia."))
let currentYear = new Date().getFullYear();

ReactDOM.render(
  <h1>Urodziłeś się w {yearOfBirth} więc masz {currentYear-yearOfBirth} lat</h1>,
  document.getElementById("app")
);
