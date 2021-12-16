import React, { Component } from 'react';

// Component Life Cycle Method
class Complifecyclemethod extends Component {
    constructor() {
        super();
        console.log("I am a Constructor");
        this.state = {
            count: 0
        };
        this.Increment = this.Increment.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps...here");
    }

    componentDidMount() {
        console.log("Component Did Mount Method");
    }
    Increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log("I am a Render Method")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
            </div>
        );
    }
}

export default Complifecyclemethod;

