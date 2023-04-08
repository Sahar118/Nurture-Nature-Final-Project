import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Tabs } from 'antd'
import EventsList from './EventsList'
import TheatreList from './TheatreList'
const Admin = () => {
    return (
        <div>
            <PageTitle title='Admin' />
            <Tabs defaultActiveKey='1'>
                <Tabs.TabPane tab='Events' key='1'>
                    <EventsList />
                </Tabs.TabPane>

                <Tabs.TabPane tab='Reports' key='2'>
                    Reports
                </Tabs.TabPane>

                <Tabs.TabPane tab='Theatres' key='3'>
                    <TheatreList />
                </Tabs.TabPane>
            </Tabs>
        </div>

    )
}

export default Admin