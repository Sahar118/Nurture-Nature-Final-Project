import React, { useEffect, useState } from 'react'
import { GetEventById, saveEvent } from '../apicalls/events'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { HideLoading, ShowLoading } from '../redux/loaderSlice';
import { BsHandThumbsUp } from 'react-icons/bs'
import moment from 'moment'


const AboutTheEvent = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [event, setEvent] = useState([])

    const getData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await GetEventById(params.id);
            if (response.success) {
                setEvent(response.data)
            } else {
                message.error(response.message)
            }
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }

    const saveEventByClick = async (values) => {
        try {
            dispatch(ShowLoading())
            const response = await saveEvent(values);
            if (response.success) {
                message.success(response.message);
                getData();
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
            <Link to='/events'>
                Back
            </Link>
            <h1>
                AboutTheEvent
            </h1>
            <div className='box-shadow box'>
                {event && < div className='column' >

                    <h2>
                        {event.title}
                    </h2>
                    <img src={event.poster} alt='poster' />
                    <p>
                        {event.description}
                    </p>

                    <h3>
                        Date:  {moment(event.date).format("DD-MM-YYYY")}
                    </h3>
                    <h3>
                        AT:{moment(event.time).format("HH:MM")} O'clock
                    </h3>
                    <h3> Duration : {event.duration} (h)</h3>
                    <div className='row' >
                        <BsHandThumbsUp onClick={() => { saveEventByClick(event._id) }} className='pointer hand' />
                        <p> {event.SaveEvent}</p>
                    </div>
                </div >}
            </div>
        </>

    )
}

export default AboutTheEvent