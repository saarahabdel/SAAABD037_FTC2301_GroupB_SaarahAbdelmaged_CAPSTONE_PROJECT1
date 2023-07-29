const Season = () => {
  return (
    "This is season page"
  )
}

export default Season


// chatgpt code 
// import React, { useState, useEffect } from 'react';

// function PodcastCard({ podcast, handleClick }) {
//   return (
//     <div onClick={() => handleClick(podcast.id)}>
//       <h2>{podcast.title}</h2>
//       <p>{podcast.description}</p>
//     </div>
//   );
// }

// function PodcastSeasons({ id }) {
//   const [seasons, setSeasons] = useState([]);

//   useEffect(() => {
//     async function fetchSeasons() {
//       const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
//       const data = await response.json();
//       setSeasons(data.seasons);
//     }
//     fetchSeasons();
//   }, [id]);

//   return (
//     <div>
//       <h2>Seasons</h2>
//       {seasons.map((season) => (
//         <div key={season.id}>
//           <h3>{season.title}</h3>
//           <p>{season.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const [podcasts, setPodcasts] = useState([]);
//   const [selectedPodcastId, setSelectedPodcastId] = useState(null);

//   useEffect(() => {
//     async function fetchPodcasts() {
//       const response = await fetch('https://podcast-api.netlify.app/shows');
//       const data = await response.json();
//       setPodcasts(data);
//     }
//     fetchPodcasts();
//   }, []);

//   function handlePodcastClick(id) {
//     setSelectedPodcastId(id);
//   }

//   return (
//     <div>
//       {selectedPodcastId ? (
//         <PodcastSeasons id={selectedPodcastId} />
//       ) : (
//         podcasts.map((podcast) => (
//           <PodcastCard
//             key={podcast.id}
//             podcast={podcast}
//             handleClick={handlePodcastClick}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default App;







// adam code 
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const res = await fetch("https://podcast-api.netlify.app/shows");
//       const previewData = res.json();
//       setState(prev => ({ ...prev, previewData}));

//       const showIds = previewData.map(item => item.id);
//       const showPromises = showIds.map(id =>
//         fetch("https://podcast-api.netlify.app/id/${id}")
//           .then(res => res.json())
//         );

//       const showData = await Promise.all(showPromises);
//       setState(prev => ({ ...prev, showData, apiComplete: true}));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   fetchData();
// }, [])