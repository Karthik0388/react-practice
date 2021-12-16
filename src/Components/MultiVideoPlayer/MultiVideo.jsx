import React from 'react'

const MultiVideo = (props) => {
    let {video} = props.VideoAttr
    return (
        <div>
            <video src={video}></video>
        </div>
    )
}

export default MultiVideo
