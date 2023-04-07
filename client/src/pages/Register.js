
// import React from "react";
// import { Form, message } from "antd";
// import Button from "../components/Button.js";
// import { Link } from "react-router-dom";
// import { RegisterUser } from "../apicalls/users.js";

// function Register() {

//     const onFinish = async () => {
//         try {
//             const response = await RegisterUser();
//             if (response.success) {
//                 message.success(response.message);
//             } else {
//                 message.error(response.message);
//             }
//         } catch (error) {
//             message.error(error.message);
//         }
//     }

//     return (
//         <div className="p column center">
//             <div className="column center box-shadow padding-2">
//                 <h1 className="text-xl mb-1">Nurture Nature - REGISTER</h1>
//                 <hr />
//                 <Form layout="vertical" className="mt-1"
//                     onFinish={onFinish}
//                 >

//                     <Form.Item
//                         label="Full Name"
//                         name="name"
//                         rules={[{ required: true, message: "Please input your Full Name!" }]}
//                     >
//                         <input type="text" name="name" />
//                     </Form.Item>
//                     <Form.Item
//                         label="Email"
//                         name="email"
//                         rules={[{ required: true, message: "Please input your email!" }]}
//                     >
//                         <input type="email" name="email" />
//                     </Form.Item>
//                     <Form.Item

//                         label="Password"
//                         name="password"
//                         rules={[{ required: true, message: "Please input your password!" }]}
//                     >
//                         <input type="password" name="password" />
//                     </Form.Item>

//                     <div className="column mt-2 gap-1">
//                         <Button fullWidth title="Register" type="submit" />
//                         <Link to="/login" >
//                             {" "}
//                             Already have an account? Login
//                         </Link>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Register;

import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import Button from "../components/Button.js";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../apicalls/users.js";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loaderSlice.js";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await RegisterUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                navigate("/login")
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="p column center">
            <div className="column center box-shadow padding-2">
                <h1 className="text-xl mb-1">Nurture Nature - REGISTER</h1>
                <hr />
                <Form layout="vertical" className="mt-1" onFinish={onFinish}>
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[{ required: true, message: "Please input your Full Name!" }]}
                    >
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>
                    <div className="column mt-2 gap-1">
                        <Button fullWidth title="Register" type="submit" />
                        <Link to="/login">
                            {" "}
                            Already have an account? Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
