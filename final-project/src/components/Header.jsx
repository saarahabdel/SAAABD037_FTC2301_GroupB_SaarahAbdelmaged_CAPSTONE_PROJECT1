import React from 'react'
import { Outlet, Link } from "react-router-dom"
import '../App.css'
import Carousel from './Carousel';

const Header = ({ podcast }) => {
    return (
        <div className='header-container'>
            <h1 className='header-style'>Podcast.</h1>
            <nav>
            <ul className='nav-bar'>
                <li><Link to='/'>Home</Link></li>
                {/* <li><Link to='/favourites'>Favourites</Link></li>
                <li><Link to='/login'>Login/Register</Link></li> */}
            </ul>
            </nav>
            <Carousel podcast={podcast} />

            <Outlet />
        </div>
    )
}

export default Header 
