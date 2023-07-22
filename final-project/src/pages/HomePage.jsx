import React from 'react';
import Header from '../components/Header';
import PodcastRow from '../components/PodcastRow';
import Search from '../components/Search';

const HomePage = () => {
    return (
        <div>
        <Header />
        <Search />
        <PodcastRow />
        </div> 
    )
}

export default HomePage 