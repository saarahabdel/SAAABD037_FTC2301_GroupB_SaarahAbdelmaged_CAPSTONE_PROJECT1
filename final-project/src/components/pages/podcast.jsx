import React from "react";
import PodcastSorting from "../PodcastSorting";
import Header from "../Header";
import { Link } from "react-router-dom";
import Loading from '../Loading'
import '../../App.css'
import { useState, useEffect } from 'react';

export default function Podcast(id) {
    /* states variables that is used in the webapp
    *
    */
    const [podcast, setPodcast] = useState([]);
    const [showDescriptionId, setShowDescriptionId] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    
    /* Api callback function that fetchs the data from the podcast api as well 
    * as if any data couldnt be fetched returns an error to the console with a message
    *
    */
    useEffect(() => {
        const apiUrl = "https://podcast-api.netlify.app/shows";
        fetch(apiUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            setPodcast(data);
          })
          .catch((error) => {
            console.error("Error fetching the podcast data:", error);
          });
      }, []);  
        

        
        /* function in charge of changing the date found in the podcast array "updated"
        * and changes it into a more user friendly format "DD - MM -- YYYY" 
        *
        */
        function formatDate(updated) {
            const date = new Date(updated);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            return `${day} - ${month} - ${year}`; 
        }

        /*
        *sorting logic. can be scaled to include more sorting options
        * and updates current podcast state
        * 
        */
        const sortAZ = (podcast) => {
            return podcast.sort((a, b) => a.title.localeCompare(b.title));
          };
          const sortZA = (podcast) => {
            return podcast.sort((a, b) => b.title.localeCompare(a.title));
          };
          const sortLatestOldest = (podcast) => {
            return podcast.sort((a, b) => new Date(b.updated) - new Date(a.updated));
          };
          const sortOldestLatest = (podcast) => {
            return podcast.sort((a, b) => new Date(a.updated) - new Date(b.updated));
          };
        
        /*
        *function that imports the option from the "podcastSorting" function and 
        *updates the html with the new podcast array with the desired sorting input
        *
        */
        const handleSortingChange = (option) => {
            setSelectedOption(option);
            let sortedPodcast = [...podcast];

            let sortingOptions = {
                "--sort--": () => {},
                "A-Z": sortAZ,
                "Z-A": sortZA,
                "Recent - Oldest": sortLatestOldest,
                "Oldest - Recent": sortOldestLatest,
            };
            
            if (sortingOptions[option]) {
                sortingOptions = sortingOptions[option](sortedPodcast);
            }

            setPodcast(sortedPodcast);
        }

    return (
        <div>
          <Header />
        <main className="podcast">
            <PodcastSorting handleSelectChange={handleSortingChange} />
            {podcast.length === 0 ? (
                <div className="loading-screen">
                    <Loading />
                </div>
            ) :
            (podcast.map((show) => (
                <div key={show.id} className="podcast-item">
                    <div>
                      <img 
                          className="podcast-image" 
                          src={show.image} 
                          alt={show.title} width='300vw' height='300vh'
                      />
                    </div>
                    <div className="podcast-info">
                        <h2 className="podcast-title">{show.title}</h2>
                        <br></br>
                        <h3 className="podcast-updated">Updated Date: {formatDate(show.updated)}</h3>
                        <br></br>
                        <h3 className="podcast-seasons">Seasons: {show.seasons}</h3>
                        <br></br>
                        <h3>Description:</h3>
                        <div className={`podcast-description ${
                            showDescriptionId === show.id ? "show" : ""}`} >
                            {show.description}
                        </div>
                        <br></br><br></br><br></br>
                        <Link to={`/podcast/${show.id}`}>
                        <button className="view-seasons-button">VIEW SEASONS</button>
                        </Link>
                    </div>
                </div>
            )))}
        </main>
        </div>
            )
}