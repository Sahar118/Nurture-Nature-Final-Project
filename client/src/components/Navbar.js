import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.style.css'
export default function Navbar() {
    return (
        <>
            <div className='middle-navbar '>
                <Link to='/'>
                    <h4> Home</h4>
                </Link>
                <Link to='/events'>
                    <h4> Events</h4>
                </Link>
                <Link to='/report'>
                    <h4> Reports</h4>
                </Link>
                <Link to='/chat'>
                    <h4> Chat</h4>
                </Link>
            </div>
        </>
    )
}




