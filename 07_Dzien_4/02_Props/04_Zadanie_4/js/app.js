import React, {Component} from "react";
import ReactDOM from "react-dom";

class LikeBox extends Component {
    render() {
        return (
            <div>
                <p>{this.props.likes} likes</p>
                <button>Lubię to!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <LikeBox likes={158}/>,
    document.getElementById("app")
);


