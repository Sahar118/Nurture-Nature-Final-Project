import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import profilePicture from '../../assest/profile-pic.webp'
import '../../styles/chat.style.css'
import { AiOutlinePlus } from "react-icons/ai"
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { SetAllChats, SetSelectedChat } from '../../redux/usersSlice';
import { toast } from 'react-hot-toast';
import { CreateNewChat } from '../../apicalls/chats'

const UsersList = ({ searchKey }) => {
    const { allUsers, allChats, user, selectedChat } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const createNewChat = async (receipentUserId) => {
        try {
            dispatch(ShowLoading());
            const response = await CreateNewChat([user._id, receipentUserId]);
            dispatch(HideLoading());
            if (response.success) {
                toast.success(response.message);
                const newChat = response.data;
                const updatedChats = [...allChats, newChat];
                dispatch(SetAllChats(updatedChats));
                dispatch(SetSelectedChat(newChat));
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            toast.error(error.message);
        }
    };
    const openChat = (receipentUserId) => {
        const chat = allChats.find(
            (chat) =>
                chat.members.map((mem) => mem._id).includes(user._id) &&
                chat.members.map((mem) => mem._id).includes(receipentUserId)
        )
        if (chat) {
            dispatch(SetSelectedChat(chat));
        }
    }

    const getData = () => {
        return allUsers
            .filter((userObj) => (userObj.name.toLowerCase().includes(searchKey.toLowerCase())
                && searchKey) || allChats.some((chat) => chat.members.map((mem) => mem._id).includes(userObj._id)))
    }

    const getIsSelectedChatOrNot = (userObj) => {
        if (selectedChat) {
            return selectedChat.members.map((mem) => mem._id).includes(user._id)
        }
        return false;
    }
    return (
        <div className='users-list-container'>
            {getData()
                .map((userObj) => {
                    return (
                        <div className={`box-shadow user-list-container pointer ${getIsSelectedChatOrNot(userObj) && "selected-user-or-not"}`}
                            key={userObj._id}
                            onClick={() => openChat(userObj._id)}
                        >
                            <div className='flex gap-2'>
                                {userObj.profilePic && (
                                    <img src={userObj.profilePic} alt='profile-pic' className='profile-pic' />
                                )}
                                {!userObj.profilePic && (
                                    <img src={profilePicture} alt='profile-pic' className='profile-pic' />
                                    // <div><h1> {userObj.name[0].toUpperCase()}</h1></div>
                                )}
                                <h4> {userObj.name} </h4>
                            </div>
                            <div
                                onClick={() => createNewChat(userObj._id)}
                            >
                                {!allChats.find((chat) => chat.members.map((mem) => mem._id).includes(userObj._id))
                                    && (
                                        <div>
                                            <button className='new-chat-button pointer' >
                                                <AiOutlinePlus /> New Chat
                                            </button>
                                        </div>
                                    )}
                            </div>

                        </div>
                    )
                })}
        </div>
    )
}

export default UsersList;
