import React, {Component} from "react";
import ReactDOM from "react-dom";


class Menu extends Component {
    render() {
        return (
            <ul>
                {this.props.menu.map((el, i) => <li key={i}><a href={el.url}>{el.text}</a></li>)}
            </ul>
        )
    }
}

const myMenu = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
]

ReactDOM.render(
    <Menu menu={myMenu}/>,
    document.getElementById("app")
);
