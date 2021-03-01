import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

const jsx = (
    <>
        <h1>{person.title} {person.firstName} {person.lastName} </h1>
        <span>{person.age} </span>
    </>
)
ReactDOM.render(
    jsx,
    document.getElementById("app")
);
