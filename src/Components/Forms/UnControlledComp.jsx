import React, { Component, createRef } from 'react'

class UnControlledComp extends Component {
usernamRef = createRef();
passwordRef = createRef();

handleSubmit =(e) => {
    e.preventDefault();
    let user = this.usernamRef.current.value;
    let pass = this.passwordRef.current.value;
    console.log({user,pass})
    
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="username" placeholder="Enter username" ref={this.usernamRef} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter Password" ref={this.passwordRef}/></div>
                <div>
                    <button >Submit</button>
                </div>
            </form>
        )
    }
}

export default UnControlledComp