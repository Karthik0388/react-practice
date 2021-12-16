import React, { Component } from 'react';
import Child from './Child'
class Parent extends Component {
    render() {
        return (
            <div>
                <h1 style={{background:"Yellow"}}>I am a Parent {this.props.user}</h1>
                <Child user={this.props.user}/>
            </div>
        );
    }
}

export default Parent;
