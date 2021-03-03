import React, {Component} from "react";
import ReactDOM from "react-dom";


class ClassSearch extends Component {
    render() {
        return (
            <div>
            <input/>
            <button>Wyszukaj</button>
            </div>
        );
    }
}

const FunctionSearch = () => {
    return (
        <div>
            <input/>
            <button>Wyszukaj</button>
        </div>
    )
}


ReactDOM.render(
    <>
        <ClassSearch/>
        <FunctionSearch/>
    </>,
    document.getElementById("app")
);
