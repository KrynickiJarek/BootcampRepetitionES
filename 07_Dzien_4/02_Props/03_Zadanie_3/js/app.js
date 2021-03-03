import React, {Component} from "react";
import ReactDOM from "react-dom";

// const Sum = (props)=>{
//     const {numbers} = props;
//     return (
//         <h1>{numbers.reduce((a,b)=>a+b)}</h1>
//     )
// }

// class Sum extends Component {
//     render() {
//         return (
//             <h1>{this.props.numbers.reduce((a, b) => a + b)}</h1>
//         )
//     }
// }

class Sum extends Component {
    render() {
        const {numbers} = this.props;
        return (
            <h1>{numbers.reduce((a, b) => a + b)}</h1>
        )
    }
}

ReactDOM.render(
    <Sum numbers={[1, 2, 3, 4, 5]}/>,
    document.getElementById("app")
);

