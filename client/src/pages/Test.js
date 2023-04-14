
import React, { useEffect, useState } from 'react'
import { GetAllEvent } from '../apicalls/events'
import { Col, Row, message } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HideLoading, ShowLoading } from '../redux/loaderSlice';
import '../styles/event.style.css'
import GetEventByDistrict from './GetEventByDistrict'
// import burrterfly from '../assest/Untitled-design-8-5-removebg-preview.png'

const Test = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [events, setEvents] = useState([])

    const getData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await GetAllEvent();
            if (response.success) {
                setEvents(response.data)
            } else {
                message.error(response.message)
            }
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    useEffect(() => {
        getData();
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <GetEventByDistrict />

            <div className=' event-container'>
                <div className='search-event-container'>
                    <input type='text'
                        className='search-input '
                        placeholder='Search for Events'
                    />
                </div>
                <Row

                    gutter={[25, 25]}
                    className='mt-1' >
                    <div className='center row'>
                        {/* <h1 onClick={() => navigate(`/event/${events.district.north}`)}> {events.district}</h1> */}
                        {events.map((event) => {
                            return (
                                <Col span={8}>
                                    <div className=' '>
                                        <img className='event-border pointer ' src={event.poster} alt='poster'
                                            height={200}
                                            width={220}
                                            onClick={() => navigate(`/event/${event._id}`)}
                                        />
                                    </div>
                                    <h1>  {event.district}</h1>
                                    <div className='flex justify-center p-1'>
                                        <h1 className='text-md uppercase'>{event.title}</h1>
                                    </div>

                                </Col>
                            )
                        })}
                    </div>


                </Row>
            </div>
        </>
    )
}

export default Test