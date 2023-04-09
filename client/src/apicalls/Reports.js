import { axiosInstance } from ".";

// Add a new Reports
export const AddReports = async (payload) => {
    try {
        const response = await axiosInstance.post(
            "/api/reports/add-report",
            payload
        );
        return response.data;
    } catch (error) {
        return error.response;
    }
};

// get all Reports
export const GetAllReports = async () => {
    try {
        const response = await axiosInstance.get("/api/reports/get-all-reports");
        return response.data;
    } catch (error) {
        return error.response;
    }
};

// get all Reports by owner
export const GetAllReportsByOwner = async (payload) => {
    try {
        const response = await axiosInstance.post(
            "/api/reports/get-all-reports-by-owner",
            payload
        );
        return response.data;
    } catch (error) {
        return error.response;
    }
};

// update Reports
export const UpdateReports = async (payload) => {
    try {
        const response = await axiosInstance.post(
            "/api/reports/update-reports",
            payload
        );
        return response.data;
    } catch (error) {
        return error.response;
    }
};

// delete Reports
export const DeleteReports = async (payload) => {
    try {
        const response = await axiosInstance.post(
            "/api/reports/delete-reports",
            payload
        );
        return response.data;
    } catch (error) {
        return error.response;
    }
};

// // add show
// export const AddShow = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/reports/add-show",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };

// // get all shows
// export const GetAllShowsByTheatre = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-all-shows-by-theatre",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };

// // delete show
// export const DeleteShow = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/delete-show",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };

// // get all theatres for a movie
// export const GetAllTheatresByMovie = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-all-theatres-by-movie",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };


// // get show by id
// export const GetShowById = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-show-by-id",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// }