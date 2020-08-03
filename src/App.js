import React from "react";
import OneByOne from "./OneByOne";
import ManyByOne from "./ManyByOne";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            result: [],
            count: 0,
        };
        this.timer = null;
    }

    render() {
        const { result, count } = this.state;
        return (
            <div className="App">
                <OneByOne />
                <ManyByOne />
            </div>
        );
    }
}

export default App;
