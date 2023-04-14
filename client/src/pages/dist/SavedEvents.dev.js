// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { HideLoading, ShowLoading } from '../redux/loaderSlice'
// import { message } from 'antd'
// import { GetEventById } from '../apicalls/events'
// const SavedEvents = () => {
//     const [savedEvent, setSavedEvent] = useState(null)
//     const params = useParams()
//     const dispatch = useDispatch()
//     const getData = async () => {
//         try {
//             dispatch(ShowLoading())
//             const response = await GetEventById({
//                 eventId: params.id
//             });
//             if (response.success) {
//                 setSavedEvent(response.data)
//             } else {
//                 message.error(response.message)
//             }
//             dispatch(HideLoading())
//         } catch (error) {
//             dispatch(HideLoading())
//             message.error(error.message)
//         }
//     }
//     useEffect(() => {
//         getData();
//eslint-disable-next-line
//     }, [])
//     return (
//         <div>SavedEvents</div>
//     )
// }
// export default SavedEvents
"use strict";