import React, { Component, useState, useRef } from 'react'

// class ControlledComp extends Component {
// state = {
//     username:"",
//     password:""
// }
// handleChange= e =>{
//     let {name,value} = e.target
//     this.setState({[name]:value})
// }
// handleSubmit=(e) =>{
//     e.preventDefault();
//   let {username,password} = this.state;
//   console.log({username,password});
// };
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <input type="text" name="username" placeholder="Enter username"
//                     value={this.username}  onChange={this.handleChange} />
//                 </div>
//                 <div>
//                     <input type="password" name="password" placeholder="Enter Password"
//                      value={this.username} onChange={this.handleChange}  />
//                     </div>
//                 <div>
//                     <button >Submit</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default ControlledComp

// Functional based controlled component


const ControlledComp = () => {
   let [state,setState] = useState({
       username: "",
       password:""
   })
    let handleChange = e =>{
        let {name,value} = e.target;
        setState({...state,[name] :value});
    }
    let handleSubmit = e => {
        e.preventDefault();
        console.log({username,password});
    }
    let {username,password} = state
    return (
        <div>
             <form onSubmit={handleSubmit}>
                 <div>
                    <input type="text" name="username" placeholder="Enter username"
                     value={username}  onChange={handleChange} />
                </div>
                 <div>
                     <input type="password" name="password" placeholder="Enter Password"
                      value={password} onChange={handleChange}  />
                     </div>
                 <div>
                    <button >Submit</button>
                 </div></form>
        </div>
    )
}

export default ControlledComp
 