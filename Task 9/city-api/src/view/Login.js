import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const loginApi = 'https://jp-dev.cityremit.global/web-api//config/v1/auths/login';
    const [Email, setEmail]= useState("");
    const [Password, setPassword]= useState("");
    const submit= async ()=>{
        setEmail(prevEmail =>{
            console.log(prevEmail);
        });
        setPassword(prevPassword =>{
            console.log(prevPassword);
        });
        // 
        await axios
            .post(loginApi,
                {
                    login_id:Email,
                    login_password:Password
                }
            ).then(res =>{
                console.log("Response: ",res);
                if(res.status===200){
                   const data =res.data.data[0];
                   localStorage.setItem("cityremit-fullName",data.full_name);
                   localStorage.setItem("cityremit-user-id",data.id);
                   localStorage.setItem("cityremit-user-image",data.profile_picture);
                   localStorage.setItem("cityremit-user",data.login_id);
                   localStorage.setItem("cityremit-token",data.jwt_token);
                   navigate('/dashboard');
                };
            }).catch(err =>{
                console.log(err);
            })
        
    };


  return (
    <div>
        {/* email */}
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/> <br/><br/>
        {/* password */}
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>
        <button type="button" onClick={submit}>Submit</button>
        {/* <Row justify="center">
            <Col span={6}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>         */}
    </div>
  );
};

// export default Login;