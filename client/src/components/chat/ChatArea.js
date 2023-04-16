import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/chat.style.css'
import { TbBrandHipchat } from "react-icons/tb";
const ChatArea = () => {
    const { selectedChat, user } = useSelector((state) => state.users)
    const recipientUser = selectedChat.members.find(
        (mem) => mem._id !== user._id
    )
    console.log(recipientUser);
    return (
        <div className='chat-area-container box-shadow'>
            {/* recipient user */}
            <div className='recipient-user-container'>
                <TbBrandHipchat className='chat-area-icon' /><h2 className='name-title-chat'>{recipientUser.name}</h2>
            </div>
            {/* chat message */}
            <div>
                chat message
            </div>
            {/* chat input */}
            <div>
                chat input
            </div>

        </div>
    )
}

export default ChatArea