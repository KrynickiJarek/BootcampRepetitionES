import React, {Component} from "react";
import ReactDOM from "react-dom";

// const HelloFnc = ({name, surname})=>{
//     return <h1>Hello, {name} {surname} !</h1>
// }

const HelloFnc = (props)=>{
    return <h1>Hello, {props.name} {props.surname} !</h1>
}

class HelloClass extends Component{
    render() {
        const {name, surname} = this.props;
        return <h1>Hello, {name} {surname} !</h1>
    }
}

ReactDOM.render(
    <>
        <HelloFnc name="Jarosław" surname= "Krynicki"/>
        <HelloClass name="Jarosław" surname= "Krynicki"/>
    </>,
    document.getElementById("app")
);
