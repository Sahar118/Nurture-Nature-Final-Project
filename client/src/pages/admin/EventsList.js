import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import EventsForm from './EventsForm'
// import moment from "moment"
import moment from 'moment-timezone';
import { Table, message } from 'antd'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice'
import { GetAllEvent } from '../../apicalls/events'
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
            title: "Date",
            dataIndex: 'date',
            render: (text, record) => {
                return moment(record.date).format("DD-MM-YYYY")
            }
        },
        {
            title: "Time",
            dataIndex: 'time',
            render: (text, record) => {
                return moment(record.time, "hmm").format("HH:mm")
            }
        },

        {
            title: "Duration (h)",
            dataIndex: 'duration'
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className='actions-container'>
                        <GrEdit />
                        < RiDeleteBin6Line />
                    </div>
                )
            }
        }
        // {
        //     title: "Poster URL",
        //     dataIndex: 'poster'
        // }
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
            <Table columns={columns} dataSource={events} />
            {showEventsFromModal && <EventsForm
                showEventsFromModal={showEventsFromModal}
                setShowEventsFromModal={setShowEventsFromModal}
                selectEvent={selectEvent}
                setSelectEvent={setSelectEvent}
                formType={formType}
            />}
        </div>
    )
}

export default EventsList