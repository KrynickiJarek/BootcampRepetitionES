import React from "react";
import ReactDOM from "react-dom";


//
// const commonStyle = {
//     width: "100px",
//     height: "100px",
// }
//
// const redStyle = {
//     backgroundColor: "red"
// }
// const greenStyle = {
//     backgroundColor: "green"
// }
// const blueStyle = {
//     backgroundColor: "blue"
// }
//
// const redDiv = <div style={{...commonStyle, ...redStyle}}/>;
// const greenDiv = <div style={{...commonStyle, ...greenStyle}}/>;
// const blueDiv =  <div style={{...commonStyle, ...blueStyle}}/>;
//


const commonStyle = {
    width: "100px",
    height: "100px",
}


const redDiv = <div style={{...commonStyle, backgroundColor: "red"}}/>;
const greenDiv = <div style={{...commonStyle, backgroundColor: "green"}}/>;
const blueDiv =  <div style={{...commonStyle, backgroundColor: "blue"}}/>;


ReactDOM.render(
    <>
      {redDiv}{greenDiv}{blueDiv}
    </>,
    document.getElementById("app")
);
