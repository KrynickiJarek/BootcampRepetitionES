import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people"

const peopleJsx = people.map(element => {
    return    <div className="person" key={element.pesel}>
        <img src={element.avatar}/>
        <div className="info">
            <h1>{element.title} {element.name} {element.surname}</h1>
            <p>{element.bio}</p>
        </div>
    </div>
})



ReactDOM.render(
    <>
        {peopleJsx}
    </>,
    document.getElementById("app")
);



