import React from 'react'
import PageTitle from '../components/PageTitle'
import { Tabs } from 'antd'
const Admin = () => {
    return (
        <div>
            <PageTitle title='Admin' />
            <Tabs defaultActiveKey='1'>
                <Tabs.TabPane tab='Events' key='1'>
                    Events
                </Tabs.TabPane>

                <Tabs.TabPane tab='Reports' key='2'>
                    Reports
                </Tabs.TabPane>

                <Tabs.TabPane tab='Theatres' key='3'>
                    Theatres
                </Tabs.TabPane>
            </Tabs>
        </div>

    )
}

export default Admin