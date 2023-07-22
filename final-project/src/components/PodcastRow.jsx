import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { genres } from '../assets/constants';
import { Link } from 'react-router-dom';

const PodcastRow = () => {

    const [podcast, setPodcast] = useState([]);
    useEffect(() => {
        fetchPodcasts();
    }, []);

    const fetchPodcasts = () => {
        axios 
          .get("https://podcast-api.netlify.app/shows")
          .then((res) => {
            console.log(res);
            setPodcast(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
    };

    const getTitle = (value) => {
        const genre = genres.find((genre) => genre.value === value);
        return genre ? genre.title : '';
      };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };  

    return (
        <li className='pod-container'>
                {podcast.map((pod) => {
                    return (
                        <Link to={`/season`} key={pod.id}>
                        <div className='podcast-container' key={pod.id}>
                            <img src={pod.image} width='300vw' height='300vh' alt="Podcast Image"></img>
                            <p>{pod.title}</p>
                            <p>{getTitle('1')}</p>
                            <p>Seasons: {pod.seasons}</p>
                            <p>Last Updated: {formatDate(pod.updated)}</p>
                        </div>
                        </Link>
                    )
                })}   
        </li>
    )
}

export default PodcastRow