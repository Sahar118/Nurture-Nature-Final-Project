const { axiosInstance } = require(".");

//  add new event
export const AddEvent = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/events/add-event", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}