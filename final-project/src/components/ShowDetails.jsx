import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Season from "./Season.jsx";
import Loading from './Loading.jsx';

export default function ShowDetails() {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  console.log(showData)

  useEffect(() => {
    const apiUrl = `https://podcast-api.netlify.app/id/${id}`;
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
    return  <div className="loading-screen">
                <Loading />
            </div>;
  }

  return (
    <div className="all-seasons">
      <h1>{`Title: ${showData.title}`}</h1>
      <br></br>
      <h3>{` Description: ${showData.description}`}</h3>
      <br></br>
      <div className="season-card">
        {showData.seasons.map((season) => (
          <Season key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
}