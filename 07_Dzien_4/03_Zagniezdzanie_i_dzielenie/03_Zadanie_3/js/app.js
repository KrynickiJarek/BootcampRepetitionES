import React, {Component} from "react";
import ReactDOM from "react-dom";

const AddNumbersFnc = (props) => {
    const {numberA, numberB} = props;
    return (
        <h1>Suma liczby {numberA} i {numberB} wynosi {numberA + numberB}</h1>
    )
}

class AddNumbersClass extends Component {
    render() {
        const {numberA, numberB} = this.props;
        return (
            <h1>Suma liczby {numberA} i {numberB} wynosi {numberA + numberB}</h1>
        )
    }
}

// const App = ()=>{
//     return (
//         <>
//         <AddNumbersFnc numberA={17} numberB={19}/>
//         <AddNumbersClass numberA={17} numberB={19}/>
//         </>
//     )
// }

class App extends Component {
    render() {
        return (
            <>
                <AddNumbersFnc numberA={17} numberB={19}/>
                <AddNumbersClass numberA={17} numberB={19}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
