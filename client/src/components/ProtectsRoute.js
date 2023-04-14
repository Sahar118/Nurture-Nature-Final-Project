import { message } from "antd";
import React, { useEffect } from "react";
import { GetAllUsers, GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetAllUsers, SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";
import { AiOutlineUser } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import Navbar from "./Navbar";
import '../styles/navbar.style.css'
import Logo from "./Logo";

function ProtectedRoute({ children }) {
    const { user } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getCurrentUser = async () => {
        try {
            dispatch(ShowLoading());
            const response = await GetCurrentUser();
            const allUsersResponse = await GetAllUsers();
            dispatch(HideLoading());
            if (response.success) {
                dispatch(SetUser(response.data));
                dispatch(SetAllUsers(allUsersResponse.data));

            } else {
                dispatch(SetUser(null));
                message.error(response.message);
                localStorage.removeItem("token");
                navigate("/login");
            }
        } catch (error) {
            dispatch(HideLoading());
            dispatch(SetUser(null));
            message.error(error.message);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getCurrentUser();
        } else {
            navigate("/login");
        }
        //eslint-disable-next-line
    }, []);

    return (
        user && (
            <div className="navbar-container">
                <div className="  flex justify-between ">
                    <div>
                        <Logo onClick={() => navigate("/")} />
                    </div>
                    <Navbar />
                    <div className="  flex gap-1 right-navbar">
                        <AiOutlineUser className="icon-nav" />
                        <h1
                            className="text-sm "
                            onClick={() => {
                                if (user.isAdmin) {
                                    navigate("/admin");
                                } else {
                                    navigate("/profile");
                                }
                            }}
                        >
                            {user.name}
                        </h1>
                        <GrLogout className="pointer icon-nav"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }} />
                    </div>
                </div>
                <div className="content mt-1 p-1">{children}</div>
            </div >
        )
    );
}

export default ProtectedRoute;