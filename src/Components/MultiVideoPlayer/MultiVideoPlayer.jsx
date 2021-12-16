import React, { useState, useRef } from 'react'
import './MultiVideoPlayer.css'
// import JSON from '../../Videos.json'
// import MultiVideo from './MultiVideo'

const MultiVideoPlayer = () => {
    let [videos, setVideos] = useState(true)
    let [mute,setMute]  = useState(true)
    let VideoRef = useRef();

    let MakePlayOrPause = () => {
        setVideos(!videos);
        if (videos === true) {
            VideoRef.current.play();
            VideoRef.current.style.width="100%";
            VideoRef.current.style.height="100vh";

        }
        else {
            VideoRef.current.pause();
            VideoRef.current.style.width="300px";
            VideoRef.current.style.height="300px";
        }
    }
    let MuteOrUnmute = () => {
        setMute(!mute);
        mute ? (VideoRef.current.muted = true) :(VideoRef.current.muted = false);
     }
    return (
        <div>
            <video src="Video.mp4" ref={VideoRef} onClick={MakePlayOrPause}></video>            
        </div>
    )
}

export default MultiVideoPlayer
