import React,{useState,useEffect} from 'react'
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <div className="nav-title">
                <h1>Where in the world?</h1>
            </div>
            <div className="mode-toggle">
                Toggle
            </div>
        </nav>
    )
}

export default Nav
