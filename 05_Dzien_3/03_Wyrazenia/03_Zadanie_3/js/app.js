import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

ReactDOM.render(
    <ul>
        <li>{person.title}</li>
        <li>{person.firstName}</li>
        <li>{person.lastName}</li>
        <li>{person.age}</li>
    </ul>,
  document.getElementById("app")
);
