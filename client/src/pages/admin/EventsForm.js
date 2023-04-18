import React from 'react'
import { Col, Form, Modal, Row, message } from 'antd'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice'
import { AddEvent, updateEvent } from '../../apicalls/events'
import moment from 'moment'
const EventsForm = ({
    showEventsFromModal,
    setShowEventsFromModal,
    selectEvent,
    setSelectEvent,
    formType,
    getData
}) => {
    if (selectEvent) {
        selectEvent.date = moment(selectEvent.date).format("DD-MM-YYYY")
        selectEvent.time = moment(selectEvent.time).format("HH:MM")

    }
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            let response = null;
            if (formType === 'add') {
                response = await AddEvent(values)
            } else {
                response = await updateEvent({
                    ...values,
                    eventId: selectEvent._id
                })
            }

            if (response.success) {
                getData()
                message.success(response.message);
                setShowEventsFromModal(false);
            } else {
                message.error(response.message)
            }
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }

    }
    return (
        <Modal
            title={formType === "add" ? "Add Event" : "Edit Event"}
            open={showEventsFromModal}
            onCancel={() => {
                setShowEventsFromModal(false)
                setSelectEvent(null)
            }}
            footer={null}
            width={800}
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
                initialValues={selectEvent}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Event Name" name='title'>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="Event Description" name='description'>
                            <textarea type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Event Location" name='location'>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="District" name='district'>
                            <input type='text' />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Event Date" name='date'>
                            <input type='date' />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Event Time" name='time'>
                            <input type="time" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Event Duration" name='duration'>
                            <input type='number' />
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label="Poster URL" name='poster'>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                </Row>

                <div className='flex justify-end gap-1'>
                    <Button title='Cancel'
                        variant='outline'
                        type='button'
                        onClick={() => {
                            setShowEventsFromModal(false)
                            setSelectEvent(null)
                        }}
                    />
                    <Button title='Save'
                        type='submit'
                    />
                </div>

            </Form>
        </Modal >
    )
}

export default EventsForm
