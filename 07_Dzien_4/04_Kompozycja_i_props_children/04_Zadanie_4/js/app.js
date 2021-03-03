import React, {Component} from "react";
import ReactDOM from "react-dom";


const messages = ['Wpis z chatu 1', 'Wpis z chatu 2', 'Wpis z chatu 3'];

function Chat({props}) {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages props={props}/>
            <NewChatMessage/>
        </section>
    )
}


function ChatHeader() {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

function ChatMessages({props}) {
    return (
        <div>
            <ul>
                <ChatMessage props={props}/>
            </ul>
        </div>
    )
}


function ChatMessage({props}) {
    return (
        props.map((el, i) => {
            return <li key={i}>{el}</li>
        })
    )
}


function NewChatMessage() {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}

function App() {
    return <Chat props={messages}/>;
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);