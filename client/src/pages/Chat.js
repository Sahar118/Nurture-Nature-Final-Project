import React, { useState } from 'react'
import UserSearch from '../components/chat/UserSearch'
import ChatArea from '../components/chat/ChatArea'
import UsersList from '../components/chat/UsersList';
import { useSelector } from 'react-redux';

const Chat = () => {
    const [searchKey, setSearchKey] = useState("");
    const { selectedChat } = useSelector((state) => state.users)

    return (
        <div className='flex'>
            <div className='w-400'>
                {/* user search, user list */}
                <UserSearch
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                />
                <UsersList
                    searchKey={searchKey}

                />
            </div>
            {/* chatBox */}
            <div>
                {selectedChat && <ChatArea />}
            </div>
        </div>
    )
}

export default Chat