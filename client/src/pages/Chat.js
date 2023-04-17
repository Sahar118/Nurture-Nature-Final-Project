import React, { useEffect, useState } from 'react'
import UserSearch from '../components/chat/UserSearch'
import ChatArea from '../components/chat/ChatArea'
import UsersList from '../components/chat/UsersList';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client'

const Chat = () => {
    const socket = io("http://localhost:5000/")
    const [searchKey, setSearchKey] = useState("");
    const { selectedChat, user } = useSelector((state) => state.users)

    // useEffect(() => {
    //     socket.emit("send-new-message-to-all", { message: "Hi from Sahar!" })
    //     socket.on("new-message-from-server", (data) => {
    //         console.log(data);
    //     })
    // }, [])

    useEffect(() => {
        //  join room
        if (user) {
            socket.emit("join-room", user._id)

            // send new message to recipient  (person 1)
            socket.emit("send-message", {
                text: "hey , this message from me!",
                sender: user._id,
                recipient: "642fd76649c8e62aebad5fb0"
            })
            // send new message from recipient  (person 2)
            socket.on("receive-message", (data) => {
                console.log("data", data);
            })

        }
        // eslint-disable-next-line
    }, [user])
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
                {selectedChat && <ChatArea
                    socket={socket}
                />}
            </div>
        </div>
    )
}

export default Chat