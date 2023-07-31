import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import EpisodePage from './pages/EpisodePage';
import SeasonPage from './pages/SeasonPage';
import FavouritesPage from './pages/FavouritesPage';
import Login from './pages/Login';
import ActualHome from './pages/ActualHome';  
import Register from './pages/Register';
import UserLoginHome from './pages/UserLoginHome';

const  App = () => {

  const [token, setToken] = useState(false)   // storing token from supabase inside 'token' 

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))   // destructure format of data thats saved inside our setItem 
  }  // if token comes through then we place token inside of sessionStorage 

  // using useEffect to make sure we always listen for changes that have happened 
  useEffect(() => {
     if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)   // made token globally accessible 
     }
  }, [])


  const [podcastData, setPodcastData] = React.useState([]);

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
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='actualhome' element={<ActualHome />}></Route>
          <Route path='season' element={<SeasonPage />}></Route>
          <Route path='episode' element={<EpisodePage />}></Route>
          <Route path='favourites' element={<FavouritesPage />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login setToken={setToken}/>}></Route>
          {token?<Route path={'/userloginhome'} element={ <UserLoginHome token={token} />} />:""}  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App 

// user will only be able to access the UserLoginHome page if token is true. 