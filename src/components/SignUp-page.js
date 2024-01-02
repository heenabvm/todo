import React from 'react';
import { Button, Form, Input } from 'antd';
import signUp from '../api/sign-up';
import { useNavigate } from 'react-router-dom';



const SignUpPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await signUp(values);
      if(res){
        navigate('/login');
      }
  };

  return(
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,

    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
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
  );
  
  }

export default SignUpPage;