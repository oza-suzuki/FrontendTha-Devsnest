import React, { Component } from 'react'
import "./App.css"

class ClassCounterApp extends Component {
    constructor(props){
        super(props);
        // console.log(this);
        this.state = {
            count: 0
        }
        // console.log(this);
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
        console.log("incremented");
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
        console.log("decremented");
    }

    render() {
        return (
            <div className="ClassCounterApp">
                <button onClick={this.decrement} style={{backgroundColor: "red"}}></button>
                <button onClick={this.increment} style={{backgroundColor: "green"}}></button> 
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default ClassCounterApp
