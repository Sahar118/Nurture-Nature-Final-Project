import React, { useState } from 'react'
import Button from '../../components/Button'
import EventsForm from './EventsForm'
const EventsList = () => {
    const [events, setEvents] = useState([])
    const [showEventsFromModal, setShowEventsFromModal] = useState(false);
    const [selectEvent, setSelectEvent] = useState(null);
    const [formType, setFormType] = useState("add");

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