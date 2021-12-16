import React, { Component } from 'react';
import ChildDefaultProp from './ChildDefaultProp';


// class Parentdefaultprop extends Component {
//     render() {
//         return (
//             <div>
//                 <Childdefaultprop username={100}/>
//             </div>
//         );
//     }
// }

// export default Parentdefaultprop;



const ParentDefaultProp = () => {
    return (
        <div>
            <ChildDefaultProp />
        </div>
    )
}

export default ParentDefaultProp

