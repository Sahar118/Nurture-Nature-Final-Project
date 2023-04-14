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

//  delete an event
export const deleteEvent = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/events/delete-event", payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


export const GetEventById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/events/get-event-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const GetAllEventsByDistrict = async (district) => {
    try {
        const response = await axiosInstance.get(`/api/events/get-event-by-district/${district}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


export const saveEvent = async (id) => {
    try {
        const response = await axiosInstance.post(`/api/events/saved-event/${id}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
