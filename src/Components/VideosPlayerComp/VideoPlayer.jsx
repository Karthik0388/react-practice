import React, { useRef } from 'react'
import { useState } from 'react'
import './VideoPlayer.css'

const VideoPlayer = () => {
    let [Play, setPlay] = useState(true);
    let [mute,setMute]  = useState(true)
    let VideoRef = useRef();
    // let PlayOrPause = () =>{
    //     videoRef.current.play();
    //     videoRef.current.style.width = "100%";
    //     videoRef.current.style.height = "100vh";
    // }
    let MakePlayOrPause = () => {
        setPlay(!Play);
        if (Play === true) {
            VideoRef.current.play();
        }
        else {
            VideoRef.current.pause();
        }
    }
    let MuteOrUnmute = () => {
       setMute(!mute);
       mute ? (VideoRef.current.muted = true) :(VideoRef.current.muted = false);
    }
    return (
        <div>
            <video src="Video.mp4" ref={VideoRef}></video>
                <span className="videoBlock">
                    <button onClick={MakePlayOrPause}>{Play === true ? "Play" : "Pause"}</button>
                    <span className="muteIcon" onClick={MuteOrUnmute}>{mute ? (<i class="fas fa-volume"></i>) : (<i class="far fa-volume-slash"></i>)}</span>
                </span>
        </div>
    )
}

export default VideoPlayer
