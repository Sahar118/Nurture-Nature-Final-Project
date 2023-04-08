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


//  Get all events
export const GetAllEvent = async (payload) => {
    try {
        const response = await axiosInstance.get("/api/events/get-all-events", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

//  update an event
export const updateEvent = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/events/update-event", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}