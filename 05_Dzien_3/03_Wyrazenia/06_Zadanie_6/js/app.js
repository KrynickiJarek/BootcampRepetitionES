import React from "react";
import ReactDOM from "react-dom";
import animals from './data/animals';



ReactDOM.render(
    <section>
        <p>Tablica animals zawiera {animals.length} elementów : {animals.join(", ")}</p>
    </section>,
    document.getElementById("app")
);
