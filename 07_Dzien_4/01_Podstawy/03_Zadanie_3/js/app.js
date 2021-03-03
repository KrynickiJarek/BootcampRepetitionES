import React, {Component} from "react";
import ReactDOM from "react-dom";

class Menu extends Component {
    render() {
        return (
            <ul>
                <li key={"main"}><a href={"/"}>Strona główna</a></li>
                <li key={"blog"}><a href={"/blog"}>Blog</a></li>
                <li key={"cennik"}><a href={"cennik"}>Cennik</a></li>
                <li key={"kontakt"}><a href={"/kontakt"}>Kontakt</a></li>
            </ul>
        )
    }
}


ReactDOM.render(
    <Menu/>,
    document.getElementById("app")
);

export {Menu};

