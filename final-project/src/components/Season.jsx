import React, { useState, useEffect } from 'react';

function Season() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/id/5675')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!Array.isArray(data.episodes)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.episodes.map(episode => (
        <div key={episode.id}>
          <h1>{episode.title}</h1>
          <p>{episode.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Season 