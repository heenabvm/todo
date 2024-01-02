import API from "./api";

const getAllUsers = async () => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: token
    }
    const response = await API.get('/user', { headers });

    return response.data;
}
export default getAllUsers;