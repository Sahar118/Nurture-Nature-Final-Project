const { axiosInstance } = require(".");

// get all chats
export const GetAllChats = async () => {
    try {
        const response = await axiosInstance.get("/api/chats/get-all-chats");
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// create new chat 
export const CreateNewChat = async (members) => {
    try {
        const response = await axiosInstance.post('/api/chats/create-new-chat', { members, });
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const ClearChatMessages = async (chatId) => {
    try {
        const response = await axiosInstance.post("/api/chats/clear-unread-messages", {
            chat: chatId,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}