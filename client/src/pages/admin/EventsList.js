import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import EventsForm from './EventsForm'
import moment from 'moment'
import { GetAllEvent, deleteEvent } from '../../apicalls/events'
import { Table, message } from 'antd'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EventsList = () => {
    const [events, setEvents] = useState([])
    const [showEventsFromModal, setShowEventsFromModal] = useState(false);
    const [selectEvent, setSelectEvent] = useState(null);
    const [formType, setFormType] = useState("add");
    const dispatch = useDispatch()

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

    const handleDelete = async (eventId) => {
        try {
            dispatch(ShowLoading())
            const response = await deleteEvent({
                eventId,
            });
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
    //  Table
    const columns = [
        {
            title: "Name",
            dataIndex: 'title'
        },
        {
            title: "description",
            dataIndex: 'description'
        },
        {
            title: "Location",
            dataIndex: 'location'
        },
        {
            title: "District",
            dataIndex: 'district'
        },
        {
            title: "Date",
            dataIndex: 'date',
            render: (text, record) => {
                return moment(record.date).format("YYYY-MM-DD")
            }
        },
        {
            title: "Time",
            dataIndex: 'time',
            render: (text, record) => {
                return moment(record.time).format("HH:MM")
            }
        },

        {
            title: "Duration (h)",
            dataIndex: 'duration'
        },
        {
            title: 'Poster',
            dataIndex: 'poster',
            render: (text, record) => {
                return (
                    <img
                        src={record.poster}
                        alt='poster'
                        height='60'
                        width='80'
                        className='br-1'
                    />
                )
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className='actions-container'>
                        <GrEdit className='pointer'
                            onClick={() => {
                                setSelectEvent(record);
                                setFormType("edit")
                                setShowEventsFromModal(true);
                            }}></GrEdit>
                        < RiDeleteBin6Line
                            className='pointer'
                            onClick={() => {
                                handleDelete(record._id);
                            }}
                        ></RiDeleteBin6Line>
                    </div>
                )
            }
        }
    ]
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div>
                <Button
                    title="Add Event"
                    variant='outlined'
                    onClick={() => {
                        setShowEventsFromModal(true);
                        setFormType("add")
                    }}
                />
            </div>
            <Table className='table' columns={columns} dataSource={events} />
            {showEventsFromModal && <EventsForm
                showEventsFromModal={showEventsFromModal}
                setShowEventsFromModal={setShowEventsFromModal}
                selectEvent={selectEvent}
                setSelectEvent={setSelectEvent}
                formType={formType}
                getData={getData}
            />}
        </div>
    )
}

export default EventsList