import React, { useState } from 'react'
import UserSearch from '../components/chat/UserSearch'
import ChatArea from '../components/chat/ChatArea'
import UsersList from '../components/chat/UsersList';

const Chat = () => {
    const [searchKey, setSearchKey] = useState("");
    return (
        <div className='flex'>
            <div className='w-400'>
                <UserSearch
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                />
                <UsersList
                    searchKey={searchKey}

                />
            </div>

            <div>
                <ChatArea />
            </div>
        </div>
    )
}

export default Chat