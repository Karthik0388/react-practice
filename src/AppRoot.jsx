import React, { Component } from "react";
import Courses from "./Courses";
class Approot extends Component {
  render() {
    return (
      <div>
        <Courses
         Courses={{
            courseName: "mernFullStack",
            trainer: "Shashi",
            duration: "5 Months",
            languages: ["JavaScript"],
          }}
        />
        <Courses
          Courses={{
            courseName: "javaFullStack",
            trainer: "Dixith",
            duration: "5 Months",
            languages: ["java","JavaScript","Sql"],
          }}
        />
        <Courses
          Courses={{
            courseName: "PythonFullStack",
            trainer: "Shashi",
            duration: "5 Months",
            languages: ["Python","JavaScript","sql"],
          }}
        />
      </div>
    );
  }
}

export default Approot;
