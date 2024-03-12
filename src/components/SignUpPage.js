import React from 'react';
import { Button, Form, Input } from 'antd';
import signUp from '../api/sign-up';
import { useNavigate } from 'react-router-dom';

////////////////////    que - 1

const str = "countVowels";
let count = 0;
for (let i = 0; i < str.length; i++) {   
    let ch = str[i].toUpperCase();
    if(ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"){
      count++;
    }
}

// console.log('Vowels=======================================');
// console.log(count);
// console.log('====================================');

////////////////////////////////      que - 2

const str1 = "Hello world123 546";
const arr = str1.split(" ");
const lenArray = [];


arr?.map(word => {
    lenArray.push(word.length);
})

const maxStr = Math.max(...lenArray);
// console.log("max", arr[lenArray.indexOf(maxStr)]);

///////////////////////////////

const data = {"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=Sr4Ce, age=68, key=CGEqo, age=76"};

const dataString = data.data;
const keyValuePairs = dataString.split(', ');
const objectsArray = [];

keyValuePairs.forEach(pair => {
  const [key, value] = pair.split('=');
  objectsArray.push({ [key]: value });
});

const result = objectsArray.filter(obj => obj.age >= 50 );

// console.log(result.length);
///////////////////////////////////////////////////////////////////////  
const color = ["Red", "Green", "Black", "Yellow"];
const o = ["th", "st", "nd", "rd"];

const pre = (index) => {
    if (index >= 1 && index <= 3)
        return o[index];
    else {
        return o[0];
    }
}
const newArr = color.map((c, i) => {
    const sufix = pre(i);
    return `${i + 1}${sufix} choice is ${c}`;
})

// console.log(newArr,"newArr");
///////////////////////////////////////////////////////////
let counts = 0;
const arr1 = [];
const leapYear = ({start, end})=>{
    for(let i=start; i<=end; i++){
        if(i%4 === 0){
            counts++;  
            arr1.push(i);         
        }
    }
    return counts;
}

// console.log(leapYear({start:2000, end:2030}),arr1,"leapYear");
/////////////////////

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
    labelCol={{ span: 8, }}
    wrapperCol={{ span: 16, }}
    style={{ maxWidth: 600, }}
    initialValues={{ remember: true, }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Name" name="name" rules={[{ required: true, message: 'Please input your name!', }, ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email" name="email" rules={[ {required: true, message: 'Please input your email!', }, ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{ offset: 8, span: 16, }}
    >
      <Button type="primary" htmlType="submit">  Submit </Button>
    </Form.Item>
  </Form>
  );
  
  }

export default SignUpPage;