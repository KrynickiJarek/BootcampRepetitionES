import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";


let jsx = people.map((element => {
    return <div key={element.pesel}>{element.name} {element.surname}</div>
}))

ReactDOM.render(
    jsx,
    document.getElementById("app")
);
