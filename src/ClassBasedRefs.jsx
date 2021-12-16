import React, { Component } from 'react';

class Classbasedrefs extends Component {
    constructor(){
        super();
        this.newRef = React.createRef();
    }
    changeColor = () => {
       let self= this.newRef.current.style;
       self.background = "red";
       self.color = "white";
       self.margin = "10px";
       self.padding = "10px";

    };
    render() {
        return (
            <div>
                <h1 onClick={this.changeColor} ref={this.newRef}>Class Based Component</h1>
            </div>
        );
    }
}

export default Classbasedrefs;
