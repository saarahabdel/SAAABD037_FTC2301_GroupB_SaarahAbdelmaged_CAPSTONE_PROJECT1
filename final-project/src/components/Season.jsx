import React, { useState } from "react";
import AudioPlayer from "./pages/AudioPlayer";
import '../App.css'

export default function Season({ season }) {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const handleSeasonClick = () => {
    setShowEpisodes(!showEpisodes);
  };


  return (
    <>
    <div className="season">
      
        <div className={`season-info ${showEpisodes ? "show-episodes" : ""}`}>
              <img
                className={`season-image ${showEpisodes ? "shrink" : ""}`}
              src={season.image}
              alt={`Season ${season.number}`}
              width='300vw' height='300vh'
            />
            <h2 className="season-title">{season.title}</h2>
        </div>


        <button onClick={handleSeasonClick} className="show-episodes-button">{showEpisodes ? 'HIDE EPISODES' : 'SHOW EPISODES'}</button>
      

        {showEpisodes && (
          <div className="season-episodes">
            <h3 className="season-title">{season.title}</h3>
            {season.episodes.map((episode, index) => (
              <div key={episode.id} className="season-episode-item">
                {`${index + 1}. ${episode.title}`}
                <AudioPlayer audioUrl={episode.file} />
              </div>
            ))}
          </div>
          
        )}


      </div>
    </>
  );
}