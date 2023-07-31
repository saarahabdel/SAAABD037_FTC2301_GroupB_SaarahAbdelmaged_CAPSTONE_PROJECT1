import React from 'react';
import Header from '../components/Header';
import PodcastRow from '../components/PodcastRow';
import Search from '../components/Search';
import Carousel from '../components/Carousel';


const HomePage = () => {
    return (
        <div>
        <Header />
        <Search />
        <Carousel />
        <PodcastRow />
        </div> 
    )
}

export default HomePage 