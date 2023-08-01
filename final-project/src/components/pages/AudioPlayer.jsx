import React ,{ useState, useEffect, useRef } from "react";

export default function AudioPlayerOverlay({ audioUrl }) {
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
        <div className="audio--player-overlay">
            <audio ref={audioRef} src={audioUrl}></audio>
            <div className="audio--control">
                <button onClick={togglePlay}>{isPlaying ? "Stop" : "Play" }</button>
                {/* <button onCLick={() => audioRef.current.pause()}>Stop</button> */}
            </div>
        </div>
    )
}