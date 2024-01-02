import API from "./api";

const deleteToDo = async (id) => {
    console.log("id...", id);
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: token
    }
    const response = await API.delete(`/todo/${id}`, { headers });
    
    return response.data;
}
export default deleteToDo;