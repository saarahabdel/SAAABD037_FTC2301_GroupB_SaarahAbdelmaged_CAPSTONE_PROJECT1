import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Season = () => {

    const [season, setSeason] = useState([]);
    useEffect(() => {
        fetchSeasons();
    }, []);

    const fetchSeasons = () => {
        axios 
          .get("https://podcast-api.netlify.app/id/10716")
          .then((response) => {
            console.log(response);
            setSeason(response.data);
          })
          .catch((err) => {
            console.log(err);
          })
    };

    return (
        <div className='season-container'>
            <img src={season.image} width='300vw' height='300vh' alt='season image'></img>
            <br></br>
            <span>Show Name</span>
                <div>
                    <span>Season Number: Season Name</span>
                    <br></br>
                    <span>Show Date-Released</span>
                </div>
        </div>

    )
}

export default Season 