import React, {Component,useState} from 'react';



// Props Drilling
// It is transfering data from Grand Parent to Child  
// That to From GrandParent to Parent and Parent to Child
// To Avoid this We go with HOC or ContextAPi or Redux
// import Parent from './Parent'
// class Grandparent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 style={{background:"red"}}>I am a GrandParent</h1>
//                 <Parent user="Karthik"/>
//             </div>
//         );
//     }
// }

// export default Grandparent;



// Updating a Value using class based component
// class Grandparent extends Component {

//     state={
//         user:"karthik",
//         age:22
//     }
//     changeName=()=>{
//         this.setState({user:"Sathya",age:25})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.user}</h1>
//                 <h1>{this.state.age}</h1>
//                 <button onClick={this.changeName}>Change Name</button>
//             </div>
//         );
//     }
// }

// export default Grandparent;


   
//Name Changer Using Function based component
// const GrandParent = () => {
//     let [value,setName]=useState({name:"Sathya",age:22});

//   let {name,age} = value

//     let ChangeName = () =>{
//         setName({name:"Karthik",age:20});
       
//     }
//     return (
//         <div>
//             <h1>{name}</h1>
//             {/* <h1>{age}</h1> */}
        
//             <button onClick={ChangeName}>Change Name</button>
//         </div>
//     )
// }

// export default GrandParent



// counter using class Based
// class Grandparent extends Component {
//     state={
//         num:0
//     }
//     Increment = () => {
//         this.setState({num:this.state.num+1})
//     }
//     Decrement = () => {
//         this.setState({num:this.state.num-1})
//     }
//     Reset = () =>{ this.setState({num:0})}
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.num}</h1>
//                 <button onClick={this.Increment}>Increment</button>
//                 <button  onClick={this.Decrement}>Decrement</button>
//                 <button  onClick={this.Reset}>Reset</button>
//             </div>
//         );
//     }
// }

// export default Grandparent;

// Number Counter using function
// const GrandParent = () => {
//     let [num,setNum]= useState(0);
//     let Increment = () =>{
//         setNum(num+1)
//     }
//     let Decrement = () =>{
//         setNum(num-1)
//     }
//     let Reset = () =>{
//         setNum(0)
//     }

//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={Increment}>Increment</button>
//             <button onClick={Decrement}>Decrement</button>
//             <button onClick={Reset}>Reset</button>
//         </div>
//     )
// }

// export default GrandParent




// Random number Picker using class based component
// class Grandparent extends Component {
//     state={
//         randomNum:0,
//     }
//     randomNum=()=>{
//         this.setState({randomNum:Math.round(Math.random()*100)})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.randomNum}</h1>
//                 <button onClick={this.randomNum}>Random Num</button>
//             </div>
//         );
//     }
// }

// export default Grandparent;


// random Number Picker using function based component
// const GrandParent = () => {
//     let [num,setNum]= useState(0);

//     let random= ()=>{
//         setNum(Math.round(Math.random()*100));
//     }
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={random}>Random Number</button>
//         </div>
//     )
// }

// export default GrandParent




   