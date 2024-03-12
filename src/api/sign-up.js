// import API from "./api";
const baseUrl = 'http://localhost:3001';

// const signUp = async (data) => {
//     const response = await API.post('/auth/sign-up', data);
//     return response.data;
// }

const signUp = async (data) => {
    const response = await fetch(`${baseUrl}/auth/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Sign-up request failed');
    }
    
    return response.json();
};

export default signUp;