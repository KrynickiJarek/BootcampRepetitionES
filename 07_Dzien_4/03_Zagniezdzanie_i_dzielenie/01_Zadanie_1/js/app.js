import React, {Component} from "react";
import ReactDOM from "react-dom";

// const CurrencyConverter = (props) => {
//     return (
//         <div>
//             <strong>{(props.value).toFixed(2)}</strong> {props.from} => <strong>{(props.value * props.rate).toFixed(2)}</strong> {props.to}
//         </div>
//     )
// }

// const CurrencyConverter = ({value, from, to , rate}) => {
//
//     return (
//         <div>
//             <strong>{(value).toFixed(2)}</strong> {from} => <strong>{(value * rate).toFixed(2)}</strong> {to}
//         </div>
//     )
// }

//
// const CurrencyConverter = (props) => {
// const {value, from, to, rate }= props;
//     return (
//         <div>
//             <strong>{(value).toFixed(2)}</strong> {from} => <strong>{(value * rate).toFixed(2)}</strong> {to}
//         </div>
//     )
// }


// class CurrencyConverter extends Component {
//     render() {
//         const {value, from, to, rate} = this.props;
//         return (
//             <div>
//                 <strong>{(value).toFixed(2)}</strong> {from} => <strong>{(value * rate).toFixed(2)}</strong> {to}
//             </div>
//         )
//     }
// }


class CurrencyConverter extends Component {
    render() {
        return (
            <div>
                <strong>{(this.props.value).toFixed(2)}</strong> {this.props.from} => <strong>{(this.props.value * this.props.rate).toFixed(2)}</strong> {this.props.to}
            </div>
        )
    }
}


const App = () => {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275}/>
            <CurrencyConverter from="USD" to="EUR" value={200} rate={1 / 1.12275}/>
            <CurrencyConverter from="EUR" to="PLN" value={1000} rate={4.55242}/>

        </>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"));