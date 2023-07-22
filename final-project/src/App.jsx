import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import EpisodePage from './pages/EpisodePage';
import SeasonPage from './pages/SeasonPage';
import FavouritesPage from './pages/FavouritesPage';
import LoginPage from './pages/LoginPage';
  
const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='season' element={<SeasonPage />}></Route>
          <Route path='episode' element={<EpisodePage />}></Route>
          <Route path='favourites' element={<FavouritesPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App 