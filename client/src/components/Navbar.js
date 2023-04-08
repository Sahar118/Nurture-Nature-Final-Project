import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='layout p-1'>
                <div className="header bg-white p-2 flex justify-between items-center">

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
            </div>
        </>



    )
}

export default Navbar


