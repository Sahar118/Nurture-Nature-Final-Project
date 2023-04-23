import React from 'react'
import '../styles/event.style.css'
import PageTitle from '../components/PageTitle'
import GetEventByDistrict from './GetEventByDistrict'

const Events = () => {
    return (
        <>

            <PageTitle title='Choose a location' />
            <div className='events-page-container'>
                <GetEventByDistrict />
                <div className='event-page-description'>
                    <h2 className='green-1'>Dear volunteer,</h2>
                    <h3 className='green-2'>here you can search for events by region in Israel. </h3>
                    <h3 className='green-2'> Click on the desired region and a list of upcoming events will appear.</h3>
                    <h4 className='brown'> We would be happy to see you there! :-) </h4>
                </div>
            </div>
        </>
    )
}

export default Events