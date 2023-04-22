
import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Tabs } from 'antd'
import EventsList from './EventsList'
import ReportsList from './ReportsList'

const Admin = () => {
    const tabs = [
        {
            key: 'EventsAdmin',
            tab: 'Events',
            content: <EventsList />
        },
        {
            key: 'ReportsAdmin',
            tab: 'Reports',
            content: <ReportsList />
        }
    ]

    return (
        <>
            <PageTitle title='Admin' />
            <Tabs
                defaultActiveKey="AdminPage"
                centered
                items={tabs.map((tab, i) => {
                    return {
                        label: tab.tab,
                        key: i,
                        children: tab.content,
                    };
                })}
            ></Tabs>
        </>
    )
}

export default Admin