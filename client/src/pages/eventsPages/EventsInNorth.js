import React, { useEffect, useState } from 'react'
import { GetAllEventsByNorth } from '../../apicalls/events'
import { Col, Row, message } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import '../../styles/event.style.css'
import { IoMdArrowRoundBack } from "react-icons/io";

const EventsInNorth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [events, setEvents] = useState([])
    const getData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await GetAllEventsByNorth();
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
        <div className='events-container'>

            <div className='top-container'>
                <button className='back-to-events pointer'
                    onClick={() => navigate(`/events`)}> <IoMdArrowRoundBack className='back-icon' /> Back</button>
                <h1 className='title-event'> Events in The North</h1>
            </div>
            <div className='container'>
                <Row
                    gutter={[25, 25]}
                    className='mt-1' >
                    {events.map((event) => {
                        return (
                            <>
                                <Col span={8}>
                                    <div className='event-container pointer box-shadow '
                                        onClick={() => navigate(`/event/${event._id}`)}
                                    >
                                        <img className='event-border ' src={event.poster} alt='poster'
                                            height={200}
                                            width={220}
                                        />
                                        <h1 className='text-md'>{event.title}</h1>
                                        <br></br>
                                        <h3> {event.location}</h3>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>

            </div>

        </div >
    )
}

export default EventsInNorth