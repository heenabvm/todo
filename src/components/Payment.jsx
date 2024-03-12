import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';

import React from 'react'

const baseUrl = 'http://localhost:8008/';

const api = axios.create({
    baseURL: baseUrl
});

axios.defaults.headers.common['content-type'] = 'application/json';


export default function Payment() {   

const checkOut = async() =>{
    // const stripe = await loadStripe("pk_test_51OlSNlSDS2F7wvoum23y4wx1U1CKJTMguXFfYEkBqooY2GyHBwNRCtHdRVessrPbgxFpoLeGQc6QXX7Ncw8VAM2C002ku8dKEs");
    const plan = Number("99");
    const res = await api.post('start', {plan: plan})
    console.log(res,"response");
    if(res.data.session){
        window.location = res.data.session.url;
    }   
}

const payment = async()=>{
    const stripe = await loadStripe("pk_test_51OlSNlSDS2F7wvoum23y4wx1U1CKJTMguXFfYEkBqooY2GyHBwNRCtHdRVessrPbgxFpoLeGQc6QXX7Ncw8VAM2C002ku8dKEs");
    const body = {
        amount: 2000,
        customer_name: "abc",
        customer_address: "111, abc circle"
    };
   
    const res = await api.post('payment', body)
    console.log(res,"res... ");
    const result = stripe.redirectToCheckout({
        sessionId: res.data.id
    })
    console.log("result", result);
    if(result.error){
        console.log(result.error);
    }
}
  return (
    <button onClick={checkOut}>Payment</button>
  )
}


