// import API from "./api";
const baseUrl = 'http://localhost:3001';

const getAllUsers = async () => {
//     const token = localStorage.getItem('token');
//     const headers = {
//         Authorization: token
//     }
//     const response = await API.get('/user', { headers });

//     return response.data;
const token = localStorage.getItem('token');
const response = await fetch(`${baseUrl}/user`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token
    },
});

if (!response.ok) {
    throw new Error('User request failed');
}

return response.json();
}
export default getAllUsers;