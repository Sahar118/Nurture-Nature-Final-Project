import React, { useEffect, useState } from 'react'
import { GetAllEvent, GetEventById } from '../../apicalls/events'
import { Col, Row, message } from 'antd'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice'



const EventsInSouthern = () => {
    const params = useParams()
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
    }, [])
    return (
        <div>EventsInSouthern

            <Row

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
                                        onClick={() => navigate(`/event/${event.id}`)}
                                    />
                                </div>
                                <div className='flex justify-center p-1'>
                                    <h1 className='text-md uppercase'>{event.title}</h1>
                                </div>

                            </Col>
                        )
                    })}
                </div>


            </Row>
        </div>


    )
}

export default EventsInSouthern