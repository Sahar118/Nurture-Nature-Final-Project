import React from 'react'
import israelMap from '../assest/israekMap.png'
import { GoLocation } from 'react-icons/go'
import PageTitle from '../components/PageTitle'
import { Link } from 'react-router-dom'

const GetEventByDistrict = () => {
    return (
        <>
            <PageTitle title='Choose a location' />
            <div className='district-container'>
                <img className='israelMap' src={israelMap} alt='israel map' />
                < Link to='north'>
                    <div className='north-container pointer'
                    >
                        <GoLocation />
                        <p> North</p>
                    </div> </Link>
                < Link to='central'>
                    <div className='central-container pointer'>
                        <GoLocation />
                        <p> Central</p>
                    </div></Link>
                < Link to='southern'>
                    <div className='southern-container pointer'>
                        <GoLocation />
                        <p> Southern</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default GetEventByDistrict