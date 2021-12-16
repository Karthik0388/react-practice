import React from 'react'
import Jspiders from './Jspiders.css' 

const JspidersChild = (props) => {
    return (
        <section id="sectionBlock">
            <table>
                   <thead>
                       <tr>
                           <th>Course Name</th>
                           <th>Trainer</th>
                           <th>Duration</th>
                           <th>Languages</th>
                       </tr>
                   </thead>
                   <tbody>
                       {props.obj.map((course)=>(
                           <tr>
                               <td>{course.courseName}</td>
                               <td>{course.trainer}</td>
                               <td>{course.Duration}</td>
                               <td>
                                   {course.languages}
                               </td>
                           </tr>
                       ))}
                   </tbody>
                </table>
        </section>
    )
}

export default JspidersChild
