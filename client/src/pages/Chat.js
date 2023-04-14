import React from 'react'
import UserSearch from '../components/chat/UserSearch'
import ChatArea from '../components/chat/ChatArea'

const Chat = () => {
    return (
        <div className='flex'>
            <div>
                <UserSearch />
            </div>

            <div>
                <ChatArea />
            </div>
        </div>
    )
}

export default Chat