import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profilePicture from '../../assest/profile-pic.webp'
import '../../styles/chat.style.css'
import { AiOutlineSend } from "react-icons/ai";
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import { toast } from 'react-toastify';
import { GetMessages, sendMessage } from '../../apicalls/messages'
import moment from 'moment'
import { BsCheckAll } from "react-icons/bs"
import { SetAllChats } from '../../redux/usersSlice';
import { ClearChatMessages } from '../../apicalls/chats';


const ChatArea = ({ socket }) => {
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { selectedChat, user, allChats } = useSelector((state) => state.users)
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
            //  send message to server using socket
            socket.emit("send-message", {
                ...message,
                members: selectedChat.members.map((mem) => mem._id),
                createdAt: moment().format("DD-MM-YYYY hh:mm:ss"),
                read: false,

            });

            //  send message to server to save in db 

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
    const clearUnreadMessages = async () => {
        try {
            dispatch(ShowLoading());
            const response = await ClearChatMessages(selectedChat._id);
            dispatch(HideLoading());
            if (response.success) {
                const updatedChats = allChats.map((chat) => {
                    if (chat._id === selectedChat._id) {
                        return response.data
                    }
                    return chat
                })
                dispatch(SetAllChats(updatedChats))
            }
        } catch (error) {
            dispatch(HideLoading());
            toast.error(error.message)

        }
    }
    useEffect(() => {
        getMessages();
        if (selectedChat?.lastMessage?.sender !== user._id) {
            clearUnreadMessages();
        }
        //  receive message from server using socket
        socket.on("receive-message", (message) => {
            setMessages((prev) => [...prev, message])
        })
        // eslint-disable-next-line
    }, [selectedChat])

    useEffect(() => {
        //  always scroll to bottom for messages id
        const messagesContainer = document.getElementById("messages")
        messagesContainer.scrollTop = messagesContainer.scrollHeight
    })
    return (
        <div className='chat-area-container box-shadow'>
            {/* recipient user */}
            <div >
                <div className='recipient-user-container'>
                    {recipientUser.profilePic && (
                        <img src={recipientUser.profilePic} alt='profile-pic' className='profile-pic' />
                    )}
                    {!recipientUser.profilePic && (
                        <img src={profilePicture} alt='profile-pic' className='profile-pic top-3' />
                        // <div><h1> {userObj.name[0].toUpperCase()}</h1></div>
                    )}

                    <h2 className='name-title-chat'>{recipientUser.name}</h2>
                </div>
                <hr></hr>
            </div>
            {/* chat message */}
            <div className='chat-message-area-container'
                id='messages'>
                <div className='column'>
                    {messages.map((message) => {
                        const isCurrentUserIsSender = message.sender === user._id;
                        return (

                            <div className={`flex ${isCurrentUserIsSender && 'justify-end'}`}>
                                <div className='column'>
                                    <h3
                                        className={`${isCurrentUserIsSender ? "bg-sender" : "bg-recipient"
                                            }`}>{message.text}</h3>
                                    <h5> {moment(message.createdAt).format("hh:mm A")}</h5>   </div>
                                {isCurrentUserIsSender && <BsCheckAll className={`${message.read ? "text-green" : "text-brown"}`} />}
                            </div>
                        )
                    })}
                </div>
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