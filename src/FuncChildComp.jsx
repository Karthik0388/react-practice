import React from 'react'

const FuncChildComp = (props) => {

    let {empId,empName,empSalary} = props.obj;
    console.log(empId);
    console.log(empName);
    console.log(empSalary);
    return (
        <div>
            
        </div>
    )
}

export default FuncChildComp
