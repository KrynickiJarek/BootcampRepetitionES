import React, {Component} from "react";
import ReactDOM from "react-dom";

// const AddNumbersFnc = ({numberA, numberB})=>{
//     return (
//         <h1> Suma {numberA} i {numberB} wynosi {numberA+numberB}</h1>
//     )
// }

// const AddNumbersFnc = (props)=>{
//     return (
//         <h1> Suma {props.numberA} i {props.numberB} wynosi {props.numberA+props.numberB}</h1>
//     )
// }

const AddNumbersFnc = (props) => {
    const {numberA, numberB} = props;
    return (
        <h1> Suma {numberA} i {numberB} wynosi {numberA + numberB}</h1>
    )
}

// class AddNumbersClass extends Component{
//     render() {
//         const {numberA, numberB} = this.props;
//         return(
//             <h1> Suma {numberA} i {numberB} wynosi {numberA + numberB}</h1>
//         )
//     }
// }


class AddNumbersClass extends Component{
    render() {
        // const {numberA, numberB} = this.props;
        return(
            <h1> Suma {this.props.numberA} i {this.props.numberB} wynosi {this.props.numberA+this.props.numberB}</h1>
        )
    }
}

ReactDOM.render(
    <>
        <AddNumbersFnc numberA={17} numberB={22}/>
        <AddNumbersClass numberA={9} numberB={12}/>
    </>,
    document.getElementById("app")
);
