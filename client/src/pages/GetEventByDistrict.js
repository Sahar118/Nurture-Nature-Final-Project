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

                    </div></Link>


                {/* <Row

                gutter={[25, 25]}
                className='mt-1' >
                <div className='center row'>

                    {events.map((event) => {
                        return (
                            <Col span={8}>
                                <div className=' '>
                                    <img className='event-border pointer ' src={event.poster} alt='poster'
                                        height={200}
                                        width={220}
                                        onClick={() => Navigate(`/event/${event.id}`)}
                                    />
                                </div>
                                <div className='flex justify-center p-1'>
                                    <h1 className='text-md uppercase'>{event.title}</h1>
                                </div>

                            </Col>
                        )
                    })}
                </div>


            </Row>  */}

            </div>
        </>
    )
}

export default GetEventByDistrict