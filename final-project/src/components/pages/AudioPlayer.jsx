import React ,{ useState, useRef } from "react";
import '../../App.css'

export default function AudioPlayer({ audioUrl }) {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="audio-player-overlay">
            <audio ref={audioRef} src={audioUrl}></audio>
            <div className="audio--control">
                <button onClick={togglePlay} className="play-audio-button">{isPlaying ? "Stop" : "Play" }</button>
            </div>
        </div>
    )
}