import React, { useEffect, useState } from 'react'
import { GetEventById, saveEvent } from '../apicalls/events'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { HideLoading, ShowLoading } from '../redux/loaderSlice';
import { BsHandThumbsUp } from 'react-icons/bs'
import moment from 'moment'
import { IoMdArrowRoundBack } from "react-icons/io";

const AboutTheEvent = () => {
    const params = useParams()
    const navigate = useNavigate()
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
            <div className='top-container'>
                <button className='back-to-events pointer'
                    onClick={() => navigate(`/events`)}> <IoMdArrowRoundBack className='back-icon' /> Back</button>
            </div>
            <div className='box-shadow box'>
                {event && < div className='column' >
                    <div> <h2 className='event-title-id'> {event.title} </h2> </div>
                    <div className='row margin-top-2rem'>
                        <img src={event.poster} alt='poster' className='img-box' />
                        <div className='description-container'>
                            <p className='p-description'><strong>Description: </strong>
                                {event.description}
                                <br></br>
                                <strong> Date:</strong>  {moment(event.date).format("DD-MM-YYYY")}
                                <br></br>
                                AT:{moment(event.time).format("hh:mm:ss")} O'clock
                                <br></br>
                                Duration : {event.duration} (h)

                                <div className='row'>
                                    <div><BsHandThumbsUp onClick={() => { saveEventByClick(event._id) }} className='pointer hand' />
                                    </div>
                                    <div className='num'>{event.SaveEvent}
                                    </div>
                                </div>
                            </p>

                        </div>
                    </div>
                </div >}
            </div>
        </>

    )
}

export default AboutTheEvent