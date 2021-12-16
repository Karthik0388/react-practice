import React, { Component } from "react";
import FuncChildComp from './FuncChildComp'

class App extends Component {
  state =
//    {
//     Employees: [
      {
        empId: 1,
        empName: "Karthik",
        empSalary: 5000,
        empDesignation: "Developer",
        empCity: "Bangalore",
        empExperience: "2 years",
        empEducation: "Btech",
        empSkill: ["Javascript", "HTML", "css", "react"],
      }
    //   {
    //     empId: 2,
    //     empName: "divya",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 3,
    //     empName: "Ishaq",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 4,
    //     empName: "gokul",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 5,
    //     empName: "sathya",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 6,
    //     empName: "Harsha",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 7,
    //     empName: "Kiran",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 8,
    //     empName: "Bhadri",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 9,
    //     empName: "vibin",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    //   {
    //     empId: 10,
    //     empName: "Dhanus",
    //     empSalary: 5000,
    //     empDesignation: "Developer",
    //     empCity: "Bangalore",
    //     empExperience: "2 years",
    //     empEducation: "Btech",
    //     empSkill: ["Javascript", "HTML", "css", "react"],
    //   },
    // ],
    // learnNewThings:{
    //     frontend:["Html","css","js","react"],
    //     backend:["nodejs","Expressjs","nextjs","nestjs"],
    //     database:["mongodb","hbase","sql"]
    // }
//   };
  render() {

//   let employee = this.state.Employees.map((Employees)=>{
//        <div>

//        </div>
//     })

    return <div>
        <FuncChildComp obj={this.state}/>
       {/* <p>Employee Deatails:{this.state.Employees[0].empId}</p>
         <p>{this.state.Employees[0].empName}</p>
        <p>{this.state.Employees[0].empSalary}</p>
        <p>{this.state.Employees[0].empDesignation}</p>
         <p>{this.state.Employees[0].empCity}</p>
         <p>{this.state.Employees[0].empEducation}</p>
         <p>{this.state.Employees[0].empExperience}</p>
         <p>{this.state.Employees[0].empSkill}</p>  */}
    </div>;
  }
}

export default App;

// import React, { Component } from 'react';
// import App1 from './App1';

// class App extends Component {

    
//     render() {
//         return (
//             <div>
//                 <h1 >I am Parent Component</h1>
//                 <App1 name="Karthik" />
//                 <App1 salary={20000} />
//                 <App1 Skills={['Java','JavaScript','React','Nodejs']}/>
//                 <App1 obj={{name:"Karthik"}} />
//                 <App1 und={undefined} />
//                 <App1 nul={null} />
//                 <App1 func={()=>{
//                     console.log("Hello")
//                 }} />
//                 <App1 math={math.round(math.random()*100)} />
//                 <App1 date={new Date().toLocaleDateString()} />
//                 <App1 binIn={10n} />
//             </div>
//         );
//     }
// }

// export default App;
