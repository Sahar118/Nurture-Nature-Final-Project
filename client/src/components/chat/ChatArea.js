import React from 'react'
import { useSelector } from 'react-redux'

const ChatArea = () => {
    const { selectedChat } = useSelector((state) => state.users)
    return (
        <div>
            {selectedChat && (
                <h1>
                    {selectedChat._id}
                </h1>
            )}

        </div>
    )
}

export default ChatArea