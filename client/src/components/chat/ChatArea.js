import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profilePicture from '../../assest/profile-pic.webp'
import '../../styles/chat.style.css'
import { AiOutlineSend } from "react-icons/ai";
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import { toast } from 'react-toastify';
import { GetMessages, sendMessage } from '../../apicalls/messages'


const ChatArea = () => {
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { selectedChat, user } = useSelector((state) => state.users)
    const recipientUser = selectedChat.members.find(
        (mem) => mem._id !== user._id
    )
    const sendNewMessage = async () => {
        try {
            dispatch(ShowLoading())
            const message = {
                chat: selectedChat._id,
                sender: user._id,
                text: newMessage,
            };
            const response = await sendMessage(message);
            dispatch(HideLoading())
            if (response.success) {
                setNewMessage("")
            }
        } catch (error) {
            dispatch(HideLoading())
            toast.error(error.message)
        }
    }
    const getMessages = async () => {
        try {
            dispatch(ShowLoading())
            const response = await GetMessages(selectedChat._id);
            dispatch(HideLoading());
            if (response.success) {
                setMessages(response.data)
            }
        } catch (error) {
            dispatch(HideLoading());
            toast.error(error.message)

        }
    }
    useEffect(() => {
        getMessages();
        // eslint-disable-next-line
    }, [selectedChat])
    return (
        <div className='chat-area-container box-shadow'>
            {/* recipient user */}
            <div >
                <div className='recipient-user-container'>
                    {recipientUser.profilePic && (
                        <img src={recipientUser.profilePic} alt='profile-pic' className='profile-pic' />
                    )}
                    {!recipientUser.profilePic && (
                        <img src={profilePicture} alt='profile-pic' className='profile-pic' />
                        // <div><h1> {userObj.name[0].toUpperCase()}</h1></div>
                    )}

                    <h2 className='name-title-chat'>{recipientUser.name}</h2>
                </div>
                <hr></hr>
            </div>
            {/* chat message */}
            <div>
                {messages.map((message) => {
                    const isCurrentUserIsSender = message.sender._id === user._id;
                    return (
                        <div className='column'>

                        </div>
                    )
                })}
            </div>
            {/* chat input */}
            <div className='chat-input-container'>
                <input type='text'
                    placeholder='Type a message'
                    className='input-type-message'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    className='chat-btn'
                    onClick={sendNewMessage}
                >
                    <AiOutlineSend className='send-icon pointer' />
                </button>
            </div>

        </div >
    )
}

export default ChatArea