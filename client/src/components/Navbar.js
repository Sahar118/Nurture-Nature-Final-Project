import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.style.css'
const Navbar = () => {
    return (
        <>
            <div className='middle-navbar '>
                <Link to='/login'>
                    <h4> Login</h4>
                </Link>
                <Link to='/news'>
                    <h4> News</h4>
                </Link>
                <Link to='/events'>
                    <h4> Events</h4>
                </Link>
                <Link to='/report'>
                    <h4> New Report</h4>
                </Link>
                <Link to='/forum'>
                    <h4> Forum</h4>
                </Link>
            </div>
        </>
    )
}

export default Navbar


