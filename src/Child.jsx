import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h1 style={{background:"green"}}>I am a Child component {this.props.user}</h1>
            </div>
        );
    }
}

export default Child;
