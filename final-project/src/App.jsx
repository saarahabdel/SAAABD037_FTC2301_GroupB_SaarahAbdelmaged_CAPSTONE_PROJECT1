import '../src/App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Podcast from "./components/pages/podcast";
import ShowDetails from "./components/ShowDetails";
import { useEffect, useState } from "react";
import Home from './components/pages/Home'
import Login from "./components/pages/Login";
import Register from './components/pages/Register'
import UserLoginHome from './components/pages/UserLoginHome'

export default function App() {   
    
    const [token, setToken] = useState(false)
    
    if(token){
        sessionStorage.setItem('token', JSON.stringify(token))
    }

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            let data = JSON.parse(sessionStorage.getItem('token'))
            setToken(data)
        }
    }, [])
  
    const [podcastData, setPodcastData] = useState([]);

    useEffect(() => {
        const apiUrl = "https://podcast-api.netlify.app/shows" ;
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok){
                    throw new Error("Network response was not ok");
                }return res.json();
            })
            .then((data) => {
                setPodcastData(data);
            })
            .catch((error) => {
                console.error("Error fetching the podcast data:", error);
        });
    }, []);

    return (    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/podcast" element={<Podcast podcast={podcastData} />} />
                <Route path="/podcast/:id" element={<ShowDetails />} />
                <Route path='/login' element={<Login setToken={setToken} />} />
                <Route path='/register' element={<Register />} />
                {token?<Route path='/userloginhome' element={<UserLoginHome token={token} />} />:''}
                <Route path='/userloginhome' element={<UserLoginHome />} />
            </Routes>
        </BrowserRouter>
    )    
}