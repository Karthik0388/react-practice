
import React, { Component, createRef,useState } from 'react';

// FileHandling Using Controlled Component
// const HandlingFile = () => {

//     let [state,setState] = useState({
//         uploadFile:""
//     })

//     let {name} = state;

//     let handleFileChange = e =>{
//         setState(e.target.files[0]);
        
//     }
//     let handleSubmit = e =>{
//         e.preventDefault();
//         console.log(name);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" name="UplaodFile" onChange={handleFileChange}/>
//                 <button>UploadeFile</button>
//             </form>
//         </div>
//     )
// }

// export default HandlingFile

// File Handling Using uncontrolled component

class HandlingFile extends Component {
uploadFileRef = createRef();


handleSubmit = (e) => {
    e.preventDefault();
    let file = this.uploadeFileRef.current.files[0];
   
    console.log(file)
    
}
    render() {
        return (
            <form >
                
                    <input type="file" name="password"  ref={this.uploadFileRef}/>
                
                    <button onClick={this.handleSubmit} >Submit</button>
                
            </form>
        )
    }
}

export default HandlingFile

