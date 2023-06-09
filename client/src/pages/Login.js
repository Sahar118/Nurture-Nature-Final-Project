
import React, { useEffect } from "react";
import { Form, message } from "antd";
import Button from "../components/Button.js";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicalls/users.js";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loaderSlice.js";
import DesignLogin from "../components/DesignLogin.js";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await LoginUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.success)
                localStorage.setItem("token", response.data)
                window.location.href = "/"
            } else {
                message.error(response.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
        //eslint-disable-next-line
    }, []);

    return (
        <div className="p column center">
            <div className="column center box-shadow padding-2 box-login">
                <h1 className="title-login mb-1">Nurture Nature - LOGIN</h1>
                <hr />
                < DesignLogin />
                <Form layout="vertical" className="mt-1 login-height"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <input className='input-login' w2type="email" />
                    </Form.Item>
                    <Form.Item

                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <input className='input-login' type="password" />
                    </Form.Item>

                    <div className="column mt-2 gap-1">
                        <Button fullWidth title="Login" type="submit" />
                        <Link to="/register" >
                            {" "}
                            Don't have an account? Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;