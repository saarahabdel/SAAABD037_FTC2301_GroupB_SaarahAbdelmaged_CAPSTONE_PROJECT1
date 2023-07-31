import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Season from "./Season.jsx";

export default function ShowDetails() {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  // console.log(data)

  useEffect(() => {
    const apiUrl = `https://podcast-api.netlify.app/shows/${id}`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setShowData(data);
      })
      .catch((error) => {
        console.error("Error fetching the show data:", error);
      });
  }, [id]);

  if (!showData) {
    return  <div className="loading--screen">
                <img className="loading--image" 
                    src="./src/img/ouroboros.png" 
                    alt="Loading snake"/>
                <div className="loading--text">Loading...</div>
            </div>;
  }

  return (
    <div>
      <h2>{showData.title}</h2>
      {/* Render the details of each season using Season component */}
      {showData.seasons.map((season) => (
        <Season key={season.id} season={season} />
      ))}
    </div>
  );
}