import React from 'react'
import { Tabs } from 'antd'
import PageTitle from '../../components/PageTitle'
import ReportsList from './ReportsList'

const Profile = () => {
    const tabs = [
        {
            key: 'UsersEvents',
            tab: 'Events',
            content: 'Events'
        },
        {
            key: '4',
            tab: 'UserReports',
            content: <ReportsList />
        }
    ]

    return (
        <>
            <PageTitle title='Profile' />
            <Tabs
                defaultActiveKey="Profile5"
                centered
                items={tabs.map((tab) => {
                    return {
                        label: tab.tab,
                        key: tab.key,
                        children: tab.content,
                    };
                })}
            ></Tabs>
        </>
    )
}

export default Profile