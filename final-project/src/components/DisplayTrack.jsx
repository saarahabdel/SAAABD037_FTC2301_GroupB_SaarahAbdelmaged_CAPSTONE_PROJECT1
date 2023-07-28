import { useEffect } from 'react'
const DisplayTrack = ({ currentTrack, audioRef }) => {

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
    console.log(data);
    
});
}, []); // this logs 10 audio files to console

  return (
    

    <div> 
      <audio src={currentTrack.audio} ref={audioRef} />
      <div className="audio-info">
        <div className="audio-image">
          
            <img src={currentTrack.seasons} alt="audio avatar" ></img>
          
        </div>
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
    
  );
};
export default DisplayTrack;

