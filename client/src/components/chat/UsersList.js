import React from 'react'
import { useSelector } from "react-redux";
import profilePicture from '../../assest/profile-pic.webp'
import '../../styles/chat.style.css'
const UsersList = ({ searchKey }) => {
    const { allUsers } = useSelector((state) => state.users);
    // allUsers = allUsers?.filter((user) => {
    //     return user.name.toLowerCase().includes(searchKey.toLowerCase())
    // })
    return (
        <div className='users-list-container'>
            {allUsers
                .filter((user) => user.name.toLowerCase().includes(searchKey.toLowerCase()) && searchKey)
                .map((userObj) => {
                    return (
                        <div className='box-shadow user-list-container pointer '>
                            <div className='flex gap-2'>
                                {userObj.profilePic && (
                                    <img src={userObj.profilePic} alt='profile-pic' className='profile-pic' />
                                )}
                                {!userObj.profilePic && (
                                    <img src={profilePicture} alt='profile-pic' className='profile-pic' />
                                    // <div><h1> {userObj.name[0].toUpperCase()}</h1></div>
                                )}

                                <h4> {userObj.name} </h4>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default UsersList;
