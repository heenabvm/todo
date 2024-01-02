import API from "./api";

const getUserTodoList = async (id) => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: token
    }
    const response = await API.get(`/todo/${id}`, { headers });

    return response.data;
}
export default getUserTodoList;