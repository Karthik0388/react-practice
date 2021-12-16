import React, { Component } from 'react';

class Listandkeys extends Component {
    state = {
        Employees: [
            {
                emp_id: "type1",
                emp_name: "Shashi",
                emp_salary: 30000,
                emp_designation: "Web Developer "
            },
            {
                emp_id: "type2",
                emp_name: "Karthik",
                emp_salary: 30000,
                emp_designation: "java Developer "
            },
            {
                emp_id: "type3",
                emp_name: "Priynka",
                emp_salary: 300000,
                emp_designation: "javaScript Developer "
            },
        ]
    }
    render() {
        let EMP_DATA = this.state.Employees.map(emp => {
            let { emp_id, emp_name, emp_salary, emp_designation } = emp;
            return (
                <tr key={emp_id}>
                    <td>{emp_id}</td>
                    <td>{emp_name}</td>
                    <td>{emp_salary}</td>
                    <td>{emp_designation}</td>
                </tr>
            )
        })
        return (
           <section id="sectionBlock">
               <article>
               <div >
                <h1>List of Employees</h1>
                <table>
                    <tr>
                        <thead>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Salary</th>
                            <th>Emp Designation</th>
                        </thead>
                    </tr>
                    <tr>
                        <tbody>{EMP_DATA}</tbody>
                    </tr>
                </table>
            </div>
               </article>
           </section>
        );
    }
}

export default Listandkeys;
