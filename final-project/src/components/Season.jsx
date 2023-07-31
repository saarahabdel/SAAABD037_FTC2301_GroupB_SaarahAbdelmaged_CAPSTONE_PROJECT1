import React, { useState } from "react";

export default function Season({ season }) {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const handleSeasonClick = () => {
    setShowEpisodes(!showEpisodes);
  };

  return (
    <div className="season">
      <img
        className="season--image"
        src={season.image}
        alt={`Season ${season.number}`}
        onClick={handleSeasonClick}
      />
      {showEpisodes && (
        <div className="season--episodes">
          <h3>Season {season.number}</h3>
          {/* Render the list of episodes */}
          {season.episodes.map((episode) => (
            <div key={episode.id}>{episode.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}