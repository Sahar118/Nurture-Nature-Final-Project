import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import ReportsForm from "../admin/ReportsList";
import { GetAllReports, UpdateReports } from '../../apicalls/Reports'
import { useDispatch, useSelector } from "react-redux";
import { message, Table } from "antd";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Shows from "./Shows";

function ReportsList() {

    const [reports = [], setReports] = useState([]);
    const dispatch = useDispatch();
    const getData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetAllReports();
            if (response.success) {
                setReports(response.data);
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const handleStatusChange = async (report) => {
        try {
            dispatch(ShowLoading());
            const response = await UpdateReports({
                ReportsId: report._id,
                ...report,
                isActive: !report.isActive,
            })
            if (response.success) {
                message.success(response.message);
                getData()
            } else {
                message.error(response.error)
            }
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)

        }
    }
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Location",
            dataIndex: "location",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Status",
            dataIndex: "isActive",
            render: (text, record) => {
                if (text) {
                    return "Approved";
                } else {
                    return "Pending / Blocked";
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <>{record.isActive && <span className="underline"
                        onClick={() => handleStatusChange(record)}
                    >Block</span>}
                        {!record.isActive && <span className="underline"
                            onClick={() => handleStatusChange(record)}
                        >Approve</span>}
                    </>
                )
            },
        },
    ];

    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Table columns={columns} dataSource={reports} />

        </div>
    );
}

export default ReportsList;