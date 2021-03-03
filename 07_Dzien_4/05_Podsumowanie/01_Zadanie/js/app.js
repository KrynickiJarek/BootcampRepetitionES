import React, {Component} from "react";
import ReactDOM from "react-dom";
import items from "./data/products";

const Recipt = ({items}) => {
    return (
        <table className="table">
            <ReceiptHeader/>
            <ReciptItems items={items}/>
            <ReciptFooter items={items}/>
        </table>
    )
}


const ReceiptHeader = () =>
    <thead>
    <tr>
        <td>Nazwa</td>
        <td>Cena</td>
        <td>Ilość</td>
        <td>Łączna cena</td>
    </tr>
    </thead>


const ReceiptItem = ({items}) => {
    return (
        items.map(el => {
                const {code, single_price, qty, name} = el;
                return (
                    <tr key={code}>
                        <td>{name}</td>
                        <td>{single_price}</td>
                        <td>{qty}</td>
                        <td>{(qty * single_price).toFixed(2)}</td>
                    </tr>
                )
            }
        ))
}

const ReciptItems = ({items}) =>
    <tbody>
    <ReceiptItem items={items}/>
    </tbody>

const totalPrice = (items) => {
    let totPrice = 0;
    for (let price of items) {
        totPrice += price.single_price * price.qty;
    }
    return totPrice.toFixed(2);
}


const ReciptFooter = ({items}) => {
    return (
        <tfoot>
        <tr>
            <td>RAZEM</td>
            <td>-</td>
            <td>-</td>
            <td>{totalPrice(items)} zł</td>
        </tr>
        </tfoot>

    )
}


const App = () => <Recipt items={items}/>


ReactDOM.render(<App/>, document.getElementById("app"));

// import React, {Component} from "react";
// import ReactDOM from "react-dom";
//
//
// ReactDOM.render(<App/>, document.getElementById("app"));
