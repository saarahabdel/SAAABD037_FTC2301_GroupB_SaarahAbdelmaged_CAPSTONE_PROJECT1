import React from 'react'
import { Outlet, Link } from "react-router-dom"
import '../App.css'


const Header = () => {
    return (
        <div className='top-container'>
            <div className='header-container'>
              <h1 className='header-style'>Podcast</h1>
              <p className='home-link'><Link to='/'>Back to Home</Link></p>
            </div>
            <input className='search-bar' type="text" placeholder="Search.."></input>
            <Outlet />
        </div>
    )
}

export default Header 
