import React, {Component} from "react";
import ReactDOM from "react-dom";

const items = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
]


class ShopItem extends Component {
    render() {
        const {props} = this.props;
        return (
            <header>
                <h1>{props.title}</h1>
                <img src={props.image}/>
            </header>
        )
    }
}


class ShopList extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="shoplist">
                {items.map((el, i) => {
                    const {title, image} = el;
                    return <ShopItem key={i} props={{title, image}}/>
                })}
            </div>
        )
    }
}


class App extends Component {
    render() {
        return <ShopList items={items}/>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);

















