import React from 'react'
import '../../styles/chat.style.css'
import { BsSearchHeart } from "react-icons/bs";
const UserSearch = ({ searchKey, setSearchKey }) => {

    return (
        <div>
            <input
                className='input-chat relative pointer'
                type='text'
                placeholder='Search for a user'
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            < BsSearchHeart className='search-icon-chat' />

        </div>
    )
}

export default UserSearch