import React from 'react'
import { useSelector } from 'react-redux'
import profilePicture from '../../assest/profile-pic.webp'
import '../../styles/chat.style.css'
import { AiOutlineSend } from "react-icons/ai";


const ChatArea = () => {
    const { selectedChat, user } = useSelector((state) => state.users)
    const recipientUser = selectedChat.members.find(
        (mem) => mem._id !== user._id
    )
    console.log(recipientUser);
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
                chat message
            </div>
            {/* chat input */}
            <div className='chat-input-container'>
                <input type='text' placeholder='Type a message'
                    className='input-type-message'
                />
                <button className='chat-btn'>
                    <AiOutlineSend className='send-icon pointer' />
                </button>
            </div>

        </div >
    )
}

export default ChatArea