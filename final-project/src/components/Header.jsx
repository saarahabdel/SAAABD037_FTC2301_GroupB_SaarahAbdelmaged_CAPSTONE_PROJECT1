import React from 'react'
import { Outlet, Link } from "react-router-dom"
import '../App.css'
import Search from './Search'

const Header = () => {
    return (
        <div className='top-container'>
            <div className='header-container'>
              <h1 className='header-style'>Podstop</h1>
              <p className='home-link'><Link to='/'>Back to Home</Link></p>
            </div>
            {/* <Search className='search-bar'/> */}
            <input className='search-bar' type="text" placeholder="Search.." ></input>
            <Outlet />
        </div>
    )
}

export default Header 
