import React from 'react'
import { Col, Form, Modal, Row, message } from 'antd'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice'
import { AddEvent } from '../../apicalls/events'
const EventsForm = ({
    showEventsFromModal,
    setShowEventsFromModal,
    selectEvent,
    setSelectEvent,
    formType
}) => {
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            let response = null;
            if (formType === 'add') {
                response = await AddEvent(values)
            } else {

            }

            if (response.success) {
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
            onCancel={() => setShowEventsFromModal(false)}
            footer={null}
            width={900}
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
                <Row gutter={20}>
                    <Col span={24}>
                        <Form.Item label="Event Name" name='title'>
                            <input type='text' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label="Event Location" name='location'>
                            <input type='text' />
                            {/* <select name='' id=''>
                                <option value='' >Select A Location</option>
                                <option value='North' >North</option>
                                <option value='South' >South</option>
                                <option value='East' >East</option>
                                <option value='West' >West</option>

                            </select> */}
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label="Event Description" name='description'>
                            <textarea type='text' />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Event Date" name='date'>
                            <input type='text' />
                        </Form.Item>
                    </Col>

                    <Col span={16}>
                        <Form.Item label="Poster URL" name='poster'>
                            <input type='text' />
                        </Form.Item>
                    </Col>


                </Row>

                <Button title='Cancel'
                    variant='outline'
                    type='button'
                    onClick={() => setShowEventsFromModal(false)}
                />
                <Button title='Save'
                    type='submit'
                />
            </Form>
        </Modal>
    )
}

export default EventsForm
