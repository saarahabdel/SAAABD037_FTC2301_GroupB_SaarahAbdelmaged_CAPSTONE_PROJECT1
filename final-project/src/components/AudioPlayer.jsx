import React from 'react'
import { useRef, useEffect, useState } from 'react';

import axios from 'axios';
import '../App.css'

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';


const AudioPlayer = () => {

    const [currentTrack, setCurrentTrack] = useState([0]);
    useEffect(() => {
        fetch('https://podcast-api.netlify.app/id/10716')
        .then(response => response.json())
        .then(data => {
        // const audioFiles = data.seasons[0].episodes.map(episode => episode.file);
        
        // const title = data.title
        const audio = data.seasons[0].episodes[0].file
        // console.log(audioFiles);
        // console.log(title)
        // console.log(audio)
        
    });
    }, []); // this logs 10 audio files to console

    const audioRef = useRef();
    const progressBarRef = useRef();
    console.log(audioRef);

    return (
        <div className="audio-player">
          <div className="inner">
            <DisplayTrack {...{ currentTrack, audioRef }} />
            <Controls {...{ audioRef }} />
            <ProgressBar {...{ progressBarRef, audioRef }} />
          </div>
        </div>
      );
};

export default AudioPlayer


