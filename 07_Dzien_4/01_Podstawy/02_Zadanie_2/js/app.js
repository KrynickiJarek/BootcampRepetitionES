import React, {Component} from "react";
import ReactDOM from "react-dom";


class LikeBox extends Component {
    render() {
        return (
          <div>
              <p>100 likes</p>
              <button>Lubię to!</button>
          </div>
        )
    }
}

ReactDOM.render(
    <LikeBox/>,
    document.getElementById("app")
);
