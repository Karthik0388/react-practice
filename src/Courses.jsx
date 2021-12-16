import React, { Component } from 'react';

class Courses extends Component {
    render() {

    let {courseName,trainer,duration,languages} = this.props.Courses;
        return (
            <div>
                <h1>Course Name:{courseName}</h1>
                <p>{trainer}</p>
                <p>{duration}</p>
                <p>{languages}</p>
            </div>
        );
    }
}

export default Courses;
