// import React, { useEffect } from 'react'
// import { GetCurrentUser } from '../apicalls/users'
// import { message } from 'antd'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { SetUser } from '../redux/usersSlice'
// const ProtectsRoute = ({ children }) => {
//     const { user } = useSelector((state) => state.users);
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const getCurrentUser = async () => {
//         try {
//             const response = await GetCurrentUser();
//             if (response.success) {
//                 dispatch(SetUser(response.data));
//             } else {
//                 dispatch(SetUser(null));
//                 message.error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetUser(null));
//             message.error(error.message);
//         }
//     }
//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             getCurrentUser()
//         } else {
//             navigate('/login')
//         }
//     }, [])
//     // useEffect(() => {
//     //     getCurrentUser()
//     // }, [])
//     return (
//         user &&
//         <div>
//             {user.name}
//             {children}
//         </div>
//     )
// }
// export default ProtectsRoute
// import React, { useEffect } from 'react';
// import { GetCurrentUser } from '../apicalls/users';
// import { message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { SetUser } from '../redux/usersSlice';
// const ProtectsRoute = ({ children }) => {
//     const { user } = useSelector((state) => state.users);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const getCurrentUser = async () => {
//         try {
//             const response = await GetCurrentUser();
//             if (response.success) {
//                 dispatch(SetUser(response.data));
//             } else {
//                 dispatch(SetUser(null));
//                 message.error(response.message);
//             }
//         } catch (error) {
//             dispatch(SetUser(null));
//             message.error(error.message);
//         }
//     };
//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             getCurrentUser();
//         } else {
//             navigate('/login');
//         }
//eslint-disable-next-line
//     }, []);
//     return (
//         <div>
//             {
//                 user && (
//                     <div>
//                         {user.name}
//                         {children}
//                     </div>
//                 )
//             }
//         </div>
//     );
// };
// export default ProtectsRoute;
"use strict";