import React, { Component } from "react";
import JspidersChild from './JspidersChild'

class Jspidersroot extends Component {
  state = {
    Jspiders: [
      {
        courseName: "MernFullStack",
        trainer: "Shashi",
        Duration: "5 Months",
        languages: ["Html", "Css", "JavaScript", "React"]
      },
      {
        courseName: "JavaFullStack",
        trainer: "Dixith",
        Duration: "5 Months",
        languages: ["Java", "JavaScript", "SQL"]
      },
      {
        courseName: "PythonFullStack",
        trainer: "Shashi",
        Duration: "3 Months",
        languages: ["Python", "JavaScript", "MySQL"]
      },
      {
        courseName: "OracleSQL",
        trainer: "Rohan",
        Duration: "1 Months",
        languages: ["SQL"]
      },
      {
        courseName: "Testing",
        trainer: "Suhash",
        Duration: "3 Months",
        languages: ["Java","Manual Testing","Selenium"]
      }
    ]
  }
  render() {
    return <div>
         <JspidersChild obj={this.state.Jspiders} />
    </div>;
  }
}

export default Jspidersroot;
