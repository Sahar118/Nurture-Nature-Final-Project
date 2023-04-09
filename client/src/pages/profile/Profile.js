import React from 'react'
import { Tabs } from 'antd'
import { userSelector, useDispatch } from 'react-redux'
import PageTitle from '../../components/PageTitle'
import ReportsList from './ReportsList'

const Profile = () => {
    return (
        <div>

            <PageTitle title='Profile' />
            <Tabs defaultActiveKey='1'>
                <Tabs.TabPane tab='Booking' key='1'>
                    Booking
                </Tabs.TabPane>

                <Tabs.TabPane tab='Reports' key='2'>
                    <ReportsList />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default Profile