import React, { useState } from 'react'

const ConditionalRendering = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [message,setMessage] = useState(["java","js","nodejs"])

    // Using ternary operator
    let AnonymousUser = () =>{
        return <button>Login</button>
    }
    let AuthenticatedUser = () =>{
            return <button>Logout</button>
    }

    //Using if else
    // let STATE = () => {
    //     if (isLoggedIn === true) {
    //         return <button>Logout</button>
    //     }
    //     else {
    //         return <button>Login</button>
    //     }
    // }
    // Using Switch codition
    // switch (isLoggedIn) {
    //     case true:
    //         return <button>Logout</button>
    //     case false:
    //         return <button>Login</button>;
    //     default:
    //         return null;
    // }

    return (
        <div>
            {isLoggedIn ? <AuthenticatedUser/> :  <AnonymousUser/>}
            {/* <p>{STATE}</p> */}
            {/* {message.length>=0 && message.map((x,i)=>(
                <ul key={i}>
                    <li>{x}</li>
                </ul>
            ))} */}
               
          
        </div>
    )
}

export default ConditionalRendering
