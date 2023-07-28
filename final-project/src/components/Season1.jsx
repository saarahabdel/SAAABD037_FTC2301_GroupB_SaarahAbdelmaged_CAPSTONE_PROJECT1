import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Season = () => {

    const [season, setSeason] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const urls = ["https://podcast-api.netlify.app/id/10716", "https://podcast-api.netlify.app/id/5675"];
            const promises = urls.map(url => fetch(url));
            const responses = await Promise.all(promises);
            const season = await Promise.all(responses.map(response => 
                response.json()));
                setSeason(season);
        };
        fetchData();
    }, []);

    

    return (
        console.log(season)
    )

}

export default Season 