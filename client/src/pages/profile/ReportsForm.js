import { Form, message, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddReports, UpdateReports } from "../../apicalls/Reports";
import Button from "../../components/Button";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";

function ReportsForm({
    showReportsFormModal,
    setShowReportsFormModal,
    formType,
    setFormType,
    selectedReports,
    setSelectedReports,
    getData,
}) {
    const { user } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        values.owner = user._id;
        try {
            dispatch(ShowLoading());
            let response = null;
            if (formType === "add") {
                response = await AddReports(values);
            } else {
                values.ReportsId = selectedReports._id;
                response = await UpdateReports(values);
            }

            if (response.success) {
                message.success(response.message);
                setShowReportsFormModal(false);
                setSelectedReports(null);
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

    return (
        <Modal
            className="modal"
            title={formType === "add" ? "Add Report" : "Edit Report"}
            open={showReportsFormModal}
            onCancel={() => {
                setShowReportsFormModal(false);
                setSelectedReports(null);
            }}
            footer={null}
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={selectedReports}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input Location name!" }]}
                >
                    <input type="text" />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: "Please input location address!" }]}
                >
                    <textarea type="text" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please input a Description!" }]}
                >
                    <textarea type="text" />
                </Form.Item>
                <div className="flex justify-end gap-1">
                    <Button
                        title="Cancel"
                        variant="outlined"
                        type="button"
                        onClick={() => {
                            setShowReportsFormModal(false);
                            setSelectedReports(null);
                        }}
                    />
                    <Button title="Save" type="submit" />
                </div>
            </Form>
        </Modal>
    );
}

export default ReportsForm;