import API from "./api";

const getTodoList = async () => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: token
    }
    const response = await API.get('/todo', { headers });

    return response.data;
}
export default getTodoList;