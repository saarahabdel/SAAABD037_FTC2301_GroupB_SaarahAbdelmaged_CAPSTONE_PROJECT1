import { genres } from '../assets/constants';
import { useState, useEffect } from 'react';
import Data from '../components/Data';
import Search from '../components/Search';
import Favourites from './Favourites';
import DiscoverPage from '../components/DiscoverPage';

// fetch("https://podcast-api.netlify.app/shows").then((res) => res.json()).then((data) => {
//   console.log(data);
// });
const Discover = () => {

    const genreTitle = 'Pop'

    return (
        // <div>
        // <div className="discover-section">
        //     <h1 className="discover">DISCOVER {genreTitle}</h1>
        //     <select
        //     onChange={() => {}}
        //     value=""
        //     >
        //         {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        //     </select>
        // </div>
        // <Data />
        // </div>

        <div className="grid-container">
          <h1 className="header">Podcast</h1>
          <ul className="nav-bar">
            <li><DiscoverPage /></li>
            <li><Search /></li>
            <li><Favourites /></li>
          </ul>
        </div>

    )
}

export default Discover;