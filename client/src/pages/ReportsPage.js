import React from 'react'
import ReportsList from './profile/ReportsList'
import PageTitle from '../components/PageTitle';

const ReportsPage = () => {
    return (
        <div>
            <PageTitle title='Reports Page' />
            <div className='description-report-page'>
                <h2>Help us clean up the environment! </h2>
                <h3>Come across a neglected area? Filled with litters?Report it to us! </h3>
                <h3> We will organize a cleanup day and go clean it up! And it will be thanks to you.</h3>
                <h4> To add a new report, click on the "Add new report" button</h4>
                <p> In the Action column you can edit or delete the report you wrote,
                    In the Status column you can follow up on the handling of your report</p>
            </div>
            <ReportsList />
        </div>
    )
}

export default ReportsPage;