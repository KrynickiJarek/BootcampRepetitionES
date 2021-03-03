import React, {Component} from "react";
import ReactDOM from "react-dom";

const item = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}


const ShopItem = ({props}) => {
    const {title, image, description, price} = props;
    return (
        <section>
            <ShopItemHeader props={{title, image}}/>
            <ShopItemDescription description= {description}/>
            <ShopItemPricing price={price}/>
        </section>
    )
}


const ShopItemHeader = ({props}) => {
    const {title, image} = props;
    return (
        <header>
            <h1>{title}</h1>
            <img src={image}/>
        </header>
    )
}


const ShopItemDescription = ({description}) => {
    return (
        <article>
            <p>{description}</p>
        </article>
    )
}

const ShopItemPricing = ({price}) => {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    )
}

const App = () => {
    return (
        <ShopItem props={item}/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);


//PRZED PODZIAŁEM
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
// const item = {
//     title: "MacBook Pro",
//     image: "https://bit.ly/2EEtduD",
//     description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
//     price: 9999
// }
//
//
// const ShopItem = ({props}) => {
//     return (
//         <section>
//             <header>
//                 <h1>{props.title}</h1>
//                 <img src={props.image}/>
//             </header>
//             <article>
//                 <p>{props.description}</p>
//             </article>
//             <footer>
//                 Cena: {props.price} zł
//                 <button>Kup!</button>
//             </footer>
//         </section>
//     )
// }
//
// const App = ()=>{
//     return (
//         <ShopItem props={item}/>
//     )
// }
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById("app")
// );

