import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import ReportsForm from "./ReportsForm";
import {
    DeleteReports,
    GetAllReportsByOwner,
} from "../../apicalls/Reports.js";
import { useDispatch, useSelector } from "react-redux";
// import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { message, Table } from "antd";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Shows from "./Shows";

function ReportsList() {
    const { user } = useSelector((state) => state.users);
    const [showReportsFormModal = false, setShowReportsFormModal] =
        useState(false);
    const [selectedReports = null, setSelectedReports] = useState(null);
    const [formType = "add", setFormType] = useState("add");
    const [reports = [], setReports] = useState([]);

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetAllReportsByOwner({
                owner: user._id,
            });
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

    const handleDelete = async (id) => {
        try {
            dispatch(ShowLoading());
            const response = await DeleteReports({ ReportsId: id });
            if (response.success) {
                message.success(response.message);
                getData();
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

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
                    <div className="flex gap-1 items-center">
                        <RiDeleteBin6Line
                            className="pointer"
                            onClick={() => {
                                handleDelete(record._id);
                            }}
                        ></RiDeleteBin6Line>
                        <GrEdit
                            className="pointer"
                            onClick={() => {
                                setFormType("edit");
                                setSelectedReports(record);
                                setShowReportsFormModal(true);
                            }}
                        ></GrEdit>

                        {record.isActive && (
                            <span
                                className="underline"
                                onClick={() => {
                                    setSelectedReports(record);
                                    // setOpenShowsModal(true);
                                }}
                            >
                                Shows
                            </span>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData();
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            <div className="flex justify-end mb-1">
                <Button
                    variant="outlined"
                    title="Add Report"
                    onClick={() => {
                        setFormType("add");
                        setShowReportsFormModal(true);
                    }}
                />
            </div>

            <Table columns={columns} dataSource={reports} />

            {showReportsFormModal && (
                <ReportsForm
                    showReportsFormModal={showReportsFormModal}
                    setShowReportsFormModal={setShowReportsFormModal}
                    formType={formType}
                    setFormType={setFormType}
                    selectedReports={selectedReports}
                    setSelectedReports={setSelectedReports}
                    getData={getData}
                />
            )}
        </div>
    );
}

export default ReportsList;