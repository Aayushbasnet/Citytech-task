import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import {Input, Button, Form, Alert} from 'antd';
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined} from '@ant-design/icons';

export default function Login() {
    const navigate = useNavigate();
    const loginApi = 'https://jp-dev.cityremit.global/web-api//config/v1/auths/login';
    const [Email, setEmail]= useState("");
    const [Password, setPassword]= useState("");
    const [error, setError]= useState("");

    useEffect(()=>{
        const token = localStorage.getItem('cityremit-token');
        const summaryApi='https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/summary';
        if(token){
            // console.log(token)
            axios
            .get(summaryApi,{
                headers:
                    {
                        Authorization:`Bearer ${token}`
                    }
            }).then(res=>{
                    navigate('/dashboard');
                
            }).catch(error=>{
                console.log("Token validation error in login: ", error);
            })
        }
    },[])
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
                setError(err.response.data.details[0].message);
                console.log(err);
            })
        
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

  return (
    <div style={{
        width:'100%',
        padding: '20px',
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Form
             name="normal_login"
             className="login-form"
             initialValues={{
               remember: true,
             }}
             onFinish={onFinish}
        >
            <div style={{
                width:'400px',
                boxShadow: '',
                borderRadius:'2px',
                padding:'20px',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                background: 'white'
            }}>
                {/* cityexpress  logo image */}
                <div style={{
                    marginBottom: '10px',
                    width:'70%',
                    alignSelf: 'center'
                }}>
                    <img src="https://jp-dev.cityremit.global/static/media/city-express-logo.f913d3a8.png" width={200} alt="city-express-logo" />
                </div>
                {/* error message */}
                <div style={{
                    marginBottom: '10px',
                    alignSelf: 'center'
                }}>
                    {
                        error?
                    
                    <Alert
                        message="Error"
                        description={error}
                        type="error"
                        closable
                        showIcon
                        />
                    : null
                    }
                </div>

                {/* email */}
                <div style={{
                    width:'70%',
                    alignSelf: 'center'
                }}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size="default size" placeholder="Email" id="email" type="email" name="email"
                            onChange={(e)=>setEmail(e.target.value)} prefix={<UserOutlined />}
                            style={{
                                borderRadius: '4px'
                            }}
                        />
                    </Form.Item>
                </div>

                {/* password */}
                <div style={{
                    marginBottom: '10px',
                    width:'70%',
                    alignSelf: 'center'
                }}>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            { min: 8, message: 'Password must be minimum 8 characters.' }
                        ]}
                    >
                        <Input.Password size="default size" placeholder="Password" id="password" type="password" name="password"
                            onChange={(e)=>setPassword(e.target.value)} prefix={<LockOutlined />}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            style={{
                                borderRadius: '4px'
                            }}
                        />
                    </Form.Item>
                </div>
                <div style={{
                    marginBottom: '10px',
                    alignSelf: 'center',
                    width: "70%"
                }}>
                    <Button type="primary" style={{width:'100%'}} onClick={submit}>Log in</Button>
                    {/* <button type="button" onClick={submit}>Submit</button> */}
                </div>
            </div>
        </Form>
    </div>
  );
};

// export default Login;