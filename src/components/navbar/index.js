import React from 'react'
import './style.css'

export default function navbar(){
    return (
    <div className="navbar">
        <img src="https://yellowbird.se/wp-content/uploads/2018/11/Netflix_logo.png" className="img-netflix" width="110" height="30" alt="logo"/>
        
        <div className="right-nav">
            <div className="nav-text">UNLIMITED TV SHOWS &amp; MOVIES</div>
            <button className="nav-join">JOIN NOW</button>
            <button className="nav-sign">SIGN IN</button>
        </div>
    </div>
    )
}